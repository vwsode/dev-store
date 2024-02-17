from django.urls import path, include

from . import views


urlpatterns = [
    path('products/', views.ProductListView.as_view()),
    path('products/<int:pk>/', views.ProductDetailView.as_view()),
    path('auth/', include('rest_framework.urls')),
    path('auth/', include('djoser.urls')),

]