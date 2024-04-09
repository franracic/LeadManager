from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerializer
    def get_queryset(self):
        if self.request.user.is_staff:
            return Lead.objects.all()
        return self.request.user.leads.all()
    def perform_create(self, serializer):
        serializer.save()