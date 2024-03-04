from django.urls import path, re_path
from . import views


urlpatterns = [
    path('products/', views.ProductListView.as_view()),
    path('products/<int:pk>/', views.ProductDetailView.as_view()),
    re_path('^products/filters/(?P<gender>.+)/$', views.ProductFilterView.as_view()),
    path('review/', views.ReviewView.as_view()),
    path('cart/', views.CartView.as_view()),
]