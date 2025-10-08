from django.urls import path
from . import views


urlpatterns = [
    path('', views.blog_list, name='blog'),
    path('subscribe/', views.subscribe_newsletter, name='subscribe_newsletter'),
    path('<slug:slug>/', views.blog_detail, name='blog_detail'),
]
