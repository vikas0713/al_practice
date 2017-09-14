"""
This file was created at Smartbuzz Inc.
For more information visit http://www.smartbuzzinc.com
"""
from django.shortcuts import render


def home(request):
    return render(
        request,
        "landing.html"
    )


def soft_registration(request):
    return render(
        request,
        "soft-registration.html",
        {}
    )


def analytics(request):
    return render(
        request,
        "analytics.html"
    )
