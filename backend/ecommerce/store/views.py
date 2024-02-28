from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from .serializers import ProductItemSerializer, ProductDetailSerializer
from .models import ProductItem


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
    



# class ProductDetailView(APIView):
#     permission_classes = (IsAuthenticatedOrReadOnly,)

#     def get(self, request, pk):
#         print(request.user)
#         product = Product.objects.get(pk=pk)
#         serializer = ProductDetailSerializer(product, context={"request": request})
#         data = serializer.data
#         data["main_image"] = request.build_absolute_uri(product.main_image.url)
#         return Response(data)

#     def post(self, request, pk):
#         review = ReviewSerializer(data=request.POST)
#         if review.is_valid():
#             review.save(product_id=pk, username_id=request.user.id)
#             return Response(status=201)
#         return Response({"response": "error"})


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
