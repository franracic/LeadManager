from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('leads.urls')),
    path('', include('accounts.urls')),
    path('', include('chat.urls')),
    path('', include('data.urls')),
    path('', include('contact.urls')),
]
