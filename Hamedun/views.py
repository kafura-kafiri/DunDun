from django.shortcuts import render
from django.http import HttpResponse


def host(request):
    file_name = request.get_raw_uri().split('/')[-1]
    return render(request, 'Hamedun/js/' + file_name, {})
