from django.db import models
from django.contrib.auth.models import User

class Lead(models.Model):
    STATES = {
        "N": "Not Started",
        "S": "Stuck",
        "W": "Working on it",
        "D": "Done"
    }
    PROCESSES = {
        "S": "Starting Sprint",
        "D": "In Design",
        "I": "In Development",
        "C": "Continuous Integration"
    }
    name = models.CharField(max_length=100)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    state = models.CharField(max_length=1, choices=STATES, default="N")
    process = models.CharField(max_length=1, choices=PROCESSES, default="S")
    complexity = models.IntegerField(default=3)