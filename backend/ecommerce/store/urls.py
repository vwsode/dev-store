from django.urls import path
from . import views


urlpatterns = [
    path('products/', views.ProductListView.as_view()),
    path('products/<int:pk>/', views.ProductDetailView.as_view()),
    path('review/', views.ReviewView.as_view()),
    path('cart/', views.CartView.as_view()),
]