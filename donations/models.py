from django.db import models


class DonationType(models.Model):
    name = models.CharField(max_length=100, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class DonationGoal(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    target_amount = models.DecimalField(max_digits=12, decimal_places=2)
    current_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["title"]

    def __str__(self):
        return self.title


class Donation(models.Model):
    PAYMENT_METHODS = (
        ("stripe", "Stripe"),
        ("paypal", "PayPal"),
        ("cash", "Cash"),
        ("bank", "Bank Transfer"),
    )

    donor_name = models.CharField(max_length=120)
    donor_email = models.EmailField()
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    donation_type = models.ForeignKey(DonationType, on_delete=models.SET_NULL, null=True, related_name="donations")
    goal = models.ForeignKey(DonationGoal, on_delete=models.SET_NULL, null=True, blank=True, related_name="donations")
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHODS)
    status = models.CharField(max_length=20, default="pending")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.donor_name} - {self.amount}"
