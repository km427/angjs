from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.views import APIView

class login_page(APIView):
    "Displaying Log in template page."
    def get(self,request,*args,**kwargs):
        return render(request,'login.html')

class userlist_page(APIView):
    "Displaying users list template page."
    def get(self,request,*args,**kwargs):
        return render(request,'users_list.html')

class listapiview_all(ListAPIView):
    """ Getting all the users list  table.
        """
    def get(self,request):
        queryset=User.objects.filter().values('username','id','is_active')
        return Response(queryset)
