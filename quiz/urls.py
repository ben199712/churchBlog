from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='quiz_home'),
    path('<int:quiz_id>/', views.quiz_detail, name='quiz_detail'),
]
