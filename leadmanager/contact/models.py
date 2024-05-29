from django.db import models

class Contact(models.Model):
    name  = models.CharField(max_length=100)
    email = models.EmailField()
    about = models.CharField(max_length=1000)
    selectedInterest = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)