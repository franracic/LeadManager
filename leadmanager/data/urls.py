from rest_framework import routers
from .api import get_data
from django.urls import path, include
from knox import views as knox_views

urlpatterns = [
    path('api/data', get_data.as_view()),
]