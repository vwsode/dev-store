from django.db import models


class Category(models.Model):
    class Meta:
        verbose_name_plural = "Categories"

    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    slug = models.SlugField(max_length=50, unique=True, default="a")

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
    image = models.ImageField(upload_to=f"products/")
    slug = models.SlugField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class ProductShots(models.Model):
    class Meta:
        verbose_name_plural = "Product shots"

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=f"products/")

    def __str__(self):
        return f"{self.product.name}"


class Review(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=30)
    text = models.TextField(max_length=500)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')

    def __str__(self):
        return f"{self.name} - {self.product.name}"
