from django.urls import path, re_path, include
from . import views 


urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
]