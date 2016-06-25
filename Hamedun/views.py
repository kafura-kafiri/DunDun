from django.shortcuts import render
from django.http import HttpResponse


def host(request):
    file_name = request.get_raw_uri().split('/')[-1]
    return render(request, 'Hamedun/js/' + file_name, {})


def index(request):
    return render(request, 'Hamedun/index.html', {})


def add_path(request):
    context = request.GET
    if 'name' in context and 'path' in context and 'url' in context:
        name, path, url = context['name'], context['path'], context['url']
        with open('/home/pouriya/PycharmProjects/DunDun/Hamedun/variables/text', 'w', encoding='utf-8') as f:
            f.write(str([name, path, url]))
    return HttpResponse('absinthe')
