from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model
from django.db.models.signals import pre_save
from django.utils.text import slugify
from django.dispatch import receiver


# PRODUCT


class Category(models.Model):
    class Meta:
        verbose_name_plural = "Categories"

    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(null=True, blank=True)
    slug = models.SlugField(max_length=50, unique=True)

    def __str__(self):
        return self.name
    
    
class Style(models.Model):
    class Meta:
        verbose_name_plural = 'Styles'
        
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ProductSize(models.Model):
    size = models.FloatField(null=False, blank=False)

    def __str__(self):
        return str(self.size)


class ProductColor(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    style = models.ForeignKey(Style, on_delete=models.SET_NULL, null=True)
    description = models.TextField()
    product_slug = models.SlugField(unique=True, max_length=100, null=True)

    def __str__(self):
        return self.name
    
    def avg_rating(self):
        rating = [review.star for review in self.reviews.all()]
        if len(rating) > 0:
            return round(sum(rating) / len(rating), 1)
        return 0


class ProductItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    size = models.ManyToManyField(ProductSize)
    color = models.ManyToManyField(ProductColor)
    price = models.FloatField()
    is_sale = models.BooleanField(default=False)
    new_price = models.FloatField(null=False, blank=True)
    item_slug = models.SlugField(max_length=100, unique=True)
    main_image = models.ImageField()

    def save(self, *args, **kwargs):
        self.main_image.name = f"products/{self.product.product_slug}/{self.item_slug}/{self.main_image.name}"
        if not self.is_sale:
            self.new_price = self.price
        super(ProductItem, self).save(*args, **kwargs)

    def __str__(self):
        colors = ", ".join([color.name for color in self.color.all()])
        return f"{self.product.name} - {colors}"
    

class ProductShots(models.Model):
    class Meta:
        verbose_name_plural = "Product shots"

    product_item = models.ForeignKey(ProductItem, on_delete=models.CASCADE, related_name="images")
    image1 = models.ImageField()
    image2 = models.ImageField(null=True)
    image3 = models.ImageField(null=True)
    image4 = models.ImageField(null=True)

    def __str__(self):
        return self.product_item.product.name

    def save(self, *args, **kwargs):
        for i in range(1, 5):
            image_field = getattr(self, f"image{i}")
            if image_field:
                image_field.name = f"products/{self.product_item.product.product_slug}/{self.product_item.item_slug}/{image_field.name}"
        super(ProductShots, self).save(*args, **kwargs)


# REVIEW


class Review(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    text = models.TextField(max_length=500)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="reviews"
    )
    star = models.SmallIntegerField(default=3)
    time_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.product.name}: {self.user} - {self.title}"


# CART


class Cart(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.get_username()} Shopping Cart"
    
    def total_price(self):
        total = sum(item.total_item_price() for item in self.items.all())
        return total


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="items")
    product_item = models.ForeignKey(ProductItem, on_delete=models.CASCADE)
    size = models.ForeignKey(ProductSize, on_delete=models.PROTECT)
    qty = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.product_item.product.name} - {self.qty}"

    def total_item_price(self):
        return self.product_item.new_price * self.qty
