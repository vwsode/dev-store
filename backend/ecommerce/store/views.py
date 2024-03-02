from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from .serializers import ProductItemSerializer, ProductDetailSerializer, ReviewSerializer, CartSerializer, ManSerializer
from .models import ProductItem, Review, Cart, CartItem
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters


# PRODUCT

class ProductListView(generics.ListAPIView):
    serializer_class = ProductItemSerializer
    queryset = ProductItem.objects.order_by('-id')[:10]

    # filter_backends = [filters.SearchFilter]
    # search_fields = ['product__name', ]
    # def get_queryset(self):
    #     queryset = ProductItem.objects.all()
    #     price = self.request.query_params.get('price')
    #     if price:
    #         queryset = queryset.filter(price=price)
    #     return queryset


class ProductManView(generics.ListAPIView):
    serializer_class = ManSerializer
    queryset = ProductItem.objects.filter(product__category__name="Men's Shoes")


class ProductDetailView(APIView):
    def get(self, request, pk):
        product_item = ProductItem.objects.get(pk=pk)
        serializer = ProductDetailSerializer(product_item, context={'request': request}).data 
        serializer['main_image'] = request.build_absolute_uri(product_item.main_image.url)
        return Response(serializer)


# REVIEW


class ReviewView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        review = ReviewSerializer(data=request.POST)
        product_id = request.POST.get('product_id')
        if review.is_valid(raise_exception=True):
            review.save(product_id=product_id, user=request.user)
            return Response(review.data)
        
    def delete(self, request):
        review = Review.objects.get(pk=request.POST['review_id'])
        review.delete()
        return Response({'Success': 'Review has been deleted!'})


# CART 


class CartView(APIView):
    def get(self, request):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        serializer = CartSerializer(cart)
        data = serializer.data 
        return Response(data)
    
    def post(self, request):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        product_id = request.data.get('product_id')
        qty = request.data.get('qty')
        size_id = request.data.get('size_id')
        if product_id and qty and size_id:
            cart_item, _ = CartItem.objects.get_or_create(cart=cart, product_item_id=product_id, size_id=size_id)
            cart_item.qty = qty 
            cart_item.save()
            return Response({"Success": "Cart has been updated"})
        return Response({"Error!": "Excepted fields: product_id, qty, size_id"})
    
    def delete(self, request):
        cart = Cart.objects.get(user=request.user)
        product_id = request.data.get('product_id')
        size_id = request.data.get('size_id')
        if product_id and size_id:
            cart_item = CartItem.objects.get(cart=cart, product_item_id=product_id, size_id=size_id)
            cart_item.delete()
            return Response({"Success": "Product has been deleted"})
        return Response({"Error! Expected fields": "product_id, size_id"})
