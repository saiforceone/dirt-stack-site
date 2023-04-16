"""dirt_tutorial URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
from django.urls import path, re_path
from django.contrib.staticfiles.views import serve as serve_static

from . import views


def _static_butler(request, path, **kwargs):
    """
    Workaround to serve static files in production mode
    """
    return serve_static(request, path, insecure=True, **kwargs)


urlpatterns = [
    path('', views.index, name='home'),
    # path("admin/", admin.site.urls),
    re_path(r'static/(.+)', _static_butler),
]
