# Generated by Django 5.0.2 on 2024-03-11 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='sender',
            field=models.BooleanField(default=False),
        ),
    ]
