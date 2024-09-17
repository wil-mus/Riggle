from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings

class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    social_media_links = models.JSONField(default=dict)  # To store social media handles
    rate_card = models.FileField(upload_to='rate_cards/', null=True, blank=True)

    def __str__(self):
        return self.user.username
