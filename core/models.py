from django.db import models

# Create your models here.
class BannerSection(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.TextField()
    image = models.ImageField(upload_to='banners/')

    def __str__(self):
        return self.title
    

class Servie(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.CharField(max_length=100)

    def __str__(self):
        return self.title
    


class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    time = models.CharField(max_length=50)
    day = models.CharField(max_length=2)
    month = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.title} ({self.date})"
    

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    message = models.TextField()
    image = models.URLField(blank=True)
    since = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.name




class Pastor(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    bio = models.TextField()
    image = models.URLField()

    def __str__(self):
        return self.name 


class ChurchInfo(models.Model):
    email = models.EmailField(max_length=254)
    phone = models.CharField(max_length=20)
    address = models.TextField()
    motto = models.TextField()
    linked_link = models.URLField()
    facebook_link = models.URLField()
    twitter_link = models.URLField()
    instagram_link = models.URLField()
    
