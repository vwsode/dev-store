from django.contrib import admin
from django.urls import path, include, re_path

from django.conf.urls.static import static
from . import settings


urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/products/', include('store.urls')),
    path('api/auth/', include('auth_user.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
