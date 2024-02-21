from django.contrib import admin
from .models import *


class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name', 'color')}


class ReviewAdmin(admin.ModelAdmin):
    readonly_fields = ('time_created',)


admin.site.register(Product, ProductAdmin)
admin.site.register(ProductSize)
admin.site.register(Category)
admin.site.register(ProductColor)
admin.site.register(ProductShots)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Cart)
admin.site.register(CartItem)
