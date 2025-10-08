from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import Paginator
from .models import BlogPost, Category
from .forms import NewsletterForm, CommentForm
from django.contrib import messages


def blog_list(request):
    category_slug = request.GET.get("category")
    queryset = BlogPost.objects.filter(is_published=True)
    if category_slug:
        queryset = queryset.filter(category__slug=category_slug)
    featured = queryset.filter(featured=True).first()
    paginator = Paginator(queryset, 9)
    page_number = request.GET.get("page")
    page_obj = paginator.get_page(page_number)
    categories = Category.objects.all()
    newsletter_form = NewsletterForm()
    context = {
        "featured": featured,
        "page_obj": page_obj,
        "categories": categories,
        "newsletter_form": newsletter_form,
    }
    return render(request, "blog.html", context)


def blog_detail(request, slug):
    post = get_object_or_404(BlogPost, slug=slug, is_published=True)
    recent_posts = BlogPost.objects.filter(is_published=True).exclude(id=post.id)[:5]
    comment_form = CommentForm()
    if request.method == "POST":
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.post = post
            comment.save()
            messages.success(request, "Your comment has been posted.")
            return redirect("blog_detail", slug=slug)
        else:
            messages.error(request, "Please correct the errors in the comment form.")
    context = {
        "post": post,
        "recent_posts": recent_posts,
        "comment_form": comment_form,
    }
    return render(request, "blog_detail.html", context)


def subscribe_newsletter(request):
    if request.method == "POST":
        form = NewsletterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "You have been subscribed to the newsletter.")
        else:
            messages.error(request, "Invalid email address.")
    return redirect("blog")
