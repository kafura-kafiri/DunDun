from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^static/js/.*\..*$', views.host, name='host'),
    url(r'^index/$', views.index, name='index'),
    url(r'^addPath/$', views.add_path, name='addPath'),
]
