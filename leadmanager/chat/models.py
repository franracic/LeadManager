from django.db import models
from django.contrib.auth.models import User

class Message(models.Model):
    message = models.CharField(max_length=500)
    owner = models.ForeignKey(User, related_name="messages", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    sender = models.BooleanField(default=False)