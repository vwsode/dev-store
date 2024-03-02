from rest_framework import serializers
from .models import Product, ProductItem, ProductShots, Review, CartItem, Cart, ProductSize
from django.contrib.auth import get_user_model


# PRODUCT LIST

class ProductSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)
    class Meta:
        model = Product 
        fields = ('id', 'name', 'category')


class ProductItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = ProductItem
        fields = ('id', 'product', 'price', 'sale_price', 'main_image', 'item_slug')


# PRODUCT DETAIL


class ProductShotsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductShots
        exclude = ('id', 'product_item')


class ProductSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSize
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('first_name', 'last_name')


class ProductReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Review
        fields = ('id', 'user', 'title', 'text', 'star', 'time_created')


class MainProductDetailSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)
    reviews = ProductReviewSerializer(many=True)
    avg_rating = serializers.FloatField()
    class Meta:
        model = Product 
        fields = '__all__'


class ProductItemDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductItem
        exclude = ('product', 'price', 'size', 'color', 'sale_price', 'item_slug')


class ProductDetailSerializer(serializers.ModelSerializer):
    product = MainProductDetailSerializer()
    color = serializers.SlugRelatedField(slug_field='name', read_only=True, many=True)
    size = ProductSizeSerializer(many=True)
    images = ProductShotsSerializer(many=True)
    additional_product_items = serializers.SerializerMethodField()
    class Meta:
        model = ProductItem 
        fields = '__all__'

    def get_additional_product_items(self, obj):
        product_items = ProductItem.objects.filter(product=obj.product).exclude(pk=obj.pk)
        data = ProductItemDetailSerializer(product_items, many=True).data
        return data


# REVIEW 

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review 
        fields = ('title', 'text', 'star')


# CART 


class CartProductSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)
    class Meta:
        model = Product 
        fields = ('id', 'name', 'category')


class CartProductItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = ProductItem
        fields = ('id', 'product', 'main_image')



class CartItemSerializer(serializers.ModelSerializer):
    product_item = CartProductItemSerializer()
    size = ProductSizeSerializer()
    class Meta:
        model = CartItem
        fields = ('product_item', 'qty', 'total_item_price', 'size')


class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True)
    class Meta:
        model = Cart
        fields = ('items', 'total_price')


# FILTER 


class ProductManSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField('name', read_only=True)
    sub_category = serializers.SlugRelatedField('name', read_only=True)
    
    class Meta:
        model = Product 
        # fields = '__all__'
        exclude = ('id', 'description')


class ManSerializer(serializers.ModelSerializer):
    size = serializers.SlugRelatedField('size', read_only=True, many=True)
    color = serializers.SlugRelatedField('name', read_only=True, many=True)
    count_of_colors = serializers.SerializerMethodField()
    discount_percent = serializers.SerializerMethodField()
    product = ProductManSerializer()

    def get_count_of_colors(self, obj):
        return obj.color.count()
    
    def get_discount_percent(self, obj):
        if obj.sale_price > 0:
            percent = round(100 - (obj.sale_price * 100 / obj.price))
        else:
            percent = 0 
        return percent
    
    class Meta:
        model = ProductItem
        fields = '__all__'
