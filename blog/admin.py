from django.contrib import admin
from .models import Category, BlogPost, Comment, Newsletter


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}
    list_display = ("name", "slug")
    search_fields = ("name",)


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    list_display = ("title", "author", "category", "featured", "is_published", "created_at")
    list_filter = ("category", "featured", "is_published", "created_at")
    search_fields = ("title", "author", "content")
    date_hierarchy = "created_at"


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("post", "name", "email", "approved", "created_at")
    list_filter = ("approved", "created_at")
    search_fields = ("name", "email", "content")


@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ("email", "subscribed_at")
    search_fields = ("email",)
