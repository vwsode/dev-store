from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Product
from .serializers import *


class ProductListView(generics.ListAPIView):
    serializer_class = ProductListSerializer
    def get_queryset(self):
        products = Product.objects.all()
        return products


class ProductDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    def get(self, request, pk):
        product = Product.objects.get(pk=pk)
        serializer = ProductDetailSerializer(product, context={'request': request})
        data = serializer.data 
        data['main_image'] = request.build_absolute_uri(product.main_image.url)
        return Response(data)
    
    def post(self, request, pk):
        review = ReviewSerializer(data=request.POST)
        if review.is_valid():
            review.save(product_id=pk, username_id=request.user.id)
            return Response(status=201)
        return Response({'response': 'error'})
