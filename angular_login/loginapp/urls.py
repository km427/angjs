from django.conf.urls import url,include
from rest_framework import routers
from loginapp import views
from rest_framework.authtoken.views import ObtainAuthToken
router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet,basename='users')
from loginapp.views import listapiview_all


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url('', include(router.urls)),
    url('auth/', ObtainAuthToken.as_view()),
    url('users',listapiview_all.as_view()),
]