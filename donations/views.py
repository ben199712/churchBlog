from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import DonationForm
from .models import Donation, DonationType, DonationGoal


def donate(request):
    if request.method == "POST":
        form = DonationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Thank you for your donation!")
            return redirect("donate")
    else:
        form = DonationForm()
    donation_types = DonationType.objects.all()
    goals = DonationGoal.objects.filter(is_active=True)
    recent_donations = Donation.objects.order_by("-created_at")[:6]
    return render(request, 'donations.html', {
        'form': form,
        'donation_types': donation_types,
        'goals': goals,
        'recent_donations': recent_donations,
    })
