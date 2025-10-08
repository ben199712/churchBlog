from django.shortcuts import render
from .models import BannerSection, Service, Event, Testimonial, Pastor, ChurchInfo
from blog.models import BlogPost


def home(request):
    banners = BannerSection.objects.all()[:3]
    services = Service.objects.all()[:3]
    events = Event.objects.order_by('date')[:6]
    testimonials = Testimonial.objects.all()[:6]
    pastor = Pastor.objects.first()
    church_info = ChurchInfo.objects.first()
    latest_posts = BlogPost.objects.filter(is_published=True).order_by('-created_at')[:3]

    context = {
        'banners': banners,
        'services': services,
        'events': events,
        'testimonials': testimonials,
        'pastor': pastor,
        'church_info': church_info,
        'latest_posts': latest_posts,
    }

    return render(request, 'index.html', context)


def about(request):
    services = Service.objects.all()
    pastor = Pastor.objects.first()
    church_info = ChurchInfo.objects.first()
    return render(request, 'about.html', {
        'services': services,
        'pastor': pastor,
        'church_info': church_info,
    })


def livestream(request):
    return render(request, 'livestream.html')
