from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^static/js/.*\..*$', views.host, name='host'),
]
