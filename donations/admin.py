from django.contrib import admin
from .models import DonationType, Donation, DonationGoal


@admin.register(DonationType)
class DonationTypeAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(DonationGoal)
class DonationGoalAdmin(admin.ModelAdmin):
    list_display = ("title", "target_amount", "current_amount", "is_active")
    list_filter = ("is_active",)
    search_fields = ("title",)


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = ("donor_name", "donor_email", "amount", "donation_type", "payment_method", "status", "created_at")
    list_filter = ("donation_type", "payment_method", "status", "created_at")
    search_fields = ("donor_name", "donor_email")
