from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics

from .models import Product
from .serializers import *


# class ProductListView(APIView):
#     def get(self, request):
#         products = Product.objects.all()
#         serializer = ProductListSerializer(products, many=True)
#         return Response(serializer.data)


class ProductListView(generics.ListAPIView):
    serializer_class = ProductListSerializer
    def get_queryset(self):
        products = Product.objects.all()
        return products


# class ProductDetailView(APIView):
#     def get(self, request, pk):
#         product = Product.objects.get(pk=pk)
#         serializer = ProductDetailSerializer(product)
#         return Response(serializer.data)


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.filter()
    serializer_class = ProductDetailSerializer


class ReviewCreateView(generics.CreateAPIView):
    serializer_class = ReviewCreateSerializer
