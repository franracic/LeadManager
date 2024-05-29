from .models import Contact
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer
from django.core.mail import send_mail
from django.conf import settings

sender = "zenzonemedianotificationsystem@gmail.com"

class ContactViewSet(viewsets.ModelViewSet):
    permission_classes = []
    serializer_class = ContactSerializer
    def get_queryset(self):
        if self.request.user.is_staff:
            return Contact.objects.all()
    def perform_create(self, serializer):
        Dict = serializer.validated_data
        message = u' '.join((Dict["name"],"email:",Dict["email"],"\nInterests: ", Dict["selectedInterest"] ,"\nuploded a text through the website. text:\n",Dict["about"],"\nIf you experience any trouble, please contact Kivi")).strip()
        send_mail( "Potential client sent a message through your website", message, settings.EMAIL_HOST_USER, ['fran.racic@gmail.com'])
        serializer.save()
