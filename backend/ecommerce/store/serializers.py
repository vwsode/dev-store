from rest_framework import serializers
from .models import Product, Review, ProductShots


class ProductListSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)
    color = serializers.SlugRelatedField(slug_field='name', read_only=True, many=True)
    class Meta: 
        model = Product 
        fields = ('id', 'name', 'category', 'main_image', 'color', 'price', 'sale_price')


class ProductShotsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductShots
        fields = ('alt', 'image')

class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('name', 'text')


class ProductDetailSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)
    color = serializers.SlugRelatedField(slug_field='name', read_only=True, many=True)
    size = serializers.SlugRelatedField(slug_field='size_eu', read_only=True, many=True)
    reviews = ReviewSerializer(many=True)
    images = ProductShotsSerializer(many=True)
    class Meta:
        model = Product
        fields = '__all__'


