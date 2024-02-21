from django.db import models
from auth_user.models import User
from datetime import datetime
from django.utils import timezone


class Category(models.Model):
    class Meta:
        verbose_name_plural = "Categories"

    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(null=True, blank=True)
    slug = models.SlugField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class ProductSize(models.Model):
    size_us_women = models.FloatField(null=False, blank=False)
    size_us_men = models.FloatField(null=False, blank=False)
    size_uk = models.FloatField(null=False, blank=False)
    size_eu = models.FloatField(null=False, blank=False)

    def __str__(self):
        return f"{self.size_us_women} - {self.size_us_men} - {self.size_uk} - {self.size_eu}"


class ProductColor(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    size = models.ManyToManyField(ProductSize)
    color = models.ManyToManyField(ProductColor)
    price = models.FloatField(null=False, blank=False)
    sale_price = models.FloatField(null=True, blank=True, default=0)
    description = models.TextField()
    main_image = models.ImageField(upload_to='products/', null=True, blank=True)
    slug = models.SlugField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class ProductShots(models.Model):
    class Meta:
        verbose_name_plural = "Product shots"

    alt = models.CharField(max_length=100)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to=f"products/")

    def __str__(self):
        return f"{self.product.name} - {self.alt}"


class Review(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    text = models.TextField(max_length=500)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')
    star = models.SmallIntegerField(default=3)
    time_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.product.name}: {self.username} - {self.title}"
    
    
class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} Shopping Cart"
    

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f'{self.product.name} - {self.quantity}'