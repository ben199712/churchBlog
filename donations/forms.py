from django import forms
from .models import Donation, DonationType, DonationGoal


class DonationForm(forms.ModelForm):
    class Meta:
        model = Donation
        fields = [
            "donor_name",
            "donor_email",
            "amount",
            "donation_type",
            "goal",
            "payment_method",
        ]
        widgets = {
            "donor_name": forms.TextInput(attrs={"class": "form-control"}),
            "donor_email": forms.EmailInput(attrs={"class": "form-control"}),
            "amount": forms.NumberInput(attrs={"class": "form-control", "min": 1}),
            "donation_type": forms.Select(attrs={"class": "form-control"}),
            "goal": forms.Select(attrs={"class": "form-control"}),
            "payment_method": forms.Select(attrs={"class": "form-control"}),
        }




