from rest_framework import serializers
from .models import Product, Review, ProductShots


class ProductShotsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductShots
        fields = ('alt', 'image')


class ReviewSerializer(serializers.ModelSerializer):
    username = serializers.SlugRelatedField(slug_field='username', read_only=True)
    class Meta:
        model = Review
        fields = ('username', 'star', 'title', 'text', 'time_created')


class ProductListSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)
    color = serializers.SlugRelatedField(slug_field='name', read_only=True, many=True)
    class Meta: 
        model = Product 
        fields = ('id', 'name', 'category', 'main_image', 'color', 'price', 'sale_price')


class ProductDetailSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)
    color = serializers.SlugRelatedField(slug_field='name', read_only=True, many=True)
    size = serializers.SlugRelatedField(slug_field='size_eu', read_only=True, many=True)
    reviews = ReviewSerializer(many=True)
    images = ProductShotsSerializer(many=True)
    class Meta:
        model = Product
        fields = '__all__'


