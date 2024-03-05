from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import static
from . import settings


urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/session-auth/', include('rest_framework.urls')),
    path('api/', include('store.urls')),
    path('api/auth/', include('auth_user.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
