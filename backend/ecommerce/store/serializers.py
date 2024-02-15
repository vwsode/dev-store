from rest_framework import serializers
from .models import Product, Review


class ProductListSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)
    color = serializers.SlugRelatedField(slug_field='name', read_only=True, many=True)
    class Meta: 
        model = Product 
        fields = ('name', 'category', 'image', 'color', 'price', 'sale_price')

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
    class Meta:
        model = Product
        fields = '__all__'


