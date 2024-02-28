from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from .serializers import ProductItemSerializer, ProductDetailSerializer, ReviewSerializer
from .models import ProductItem, Review
from rest_framework.permissions import IsAuthenticated


# PRODUCT

class ProductListView(generics.ListAPIView):
    serializer_class = ProductItemSerializer
    queryset = ProductItem.objects.all()


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


# class CartView(APIView):
#     permission_classes = (IsAuthenticated,)

#     def get(self, request):
#         cart, _ = Cart.objects.get_or_create(user_id=request.user.id)
#         serializer = CartSerializer(cart)
#         data = serializer.data
#         return Response(data)

#     def post(self, request):
#         cart, _ = Cart.objects.get_or_create(user_id=request.user.id)
#         product_id = request.data.get("product_id")
#         quantity = request.data.get("quantity")

#         if product_id and quantity:
#             product = Product.objects.get(pk=product_id)
#             cart_item, _ = CartItem.objects.get_or_create(cart=cart, product=product)
#             cart_item.quantity = quantity
#             cart_item.save()
#             return Response({"Success": "Products have been updated"})
#         return Response({"Error! Expected fields": "product_id and quantity"})

#     def delete(self, request):
#         cart, _ = Cart.objects.get_or_create(user_id=request.user.id)
#         product_id = request.data.get("product_id")

#         if product_id:
#             product = Product.objects.get(pk=product_id)
#             cart_item = CartItem.objects.get(cart=cart, product=product)
#             cart_item.delete()
#             return Response({"Success": "Product has been deleted"})
#         return Response({"Error! Expected field": "product_id"})
