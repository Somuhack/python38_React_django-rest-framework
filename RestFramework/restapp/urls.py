from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet
router =DefaultRouter()
router.register(r'users',UserViewSet)

urlpatterns = [
    path('',include(router.urls)),
]
# GET http://127.0.0.1:8000/api/users/
# POST http://127.0.0.1:8000/api/users/ with json Data
# PUT http://127.0.0.1:8000/api/users/1/
# DELETE http://127.0.0.1:8000/api/users/1/
