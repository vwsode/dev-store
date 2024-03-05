from django.contrib import admin
from .models import (
    Product,
    ProductItem,
    ProductSize,
    Category,
    ProductColor,
    ProductShots,
    Review,
    Cart,
    CartItem,
    Style
)


class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {'product_slug': ('name',)}


class ProductItemAdmin(admin.ModelAdmin):
    prepopulated_fields = {'item_slug': ('color', 'product')}


class ReviewAdmin(admin.ModelAdmin):
    readonly_fields = ('time_created',)


admin.site.register(Product, ProductAdmin)
admin.site.register(ProductItem, ProductItemAdmin)
admin.site.register(ProductSize)
admin.site.register(Category)
admin.site.register(Style)
admin.site.register(ProductColor)
admin.site.register(ProductShots)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Cart)
admin.site.register(CartItem)
