from chat.models import Message
from rest_framework import viewsets, permissions
from .serializers import MessageSerializer

class MessageViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = MessageSerializer
    def get_queryset(self):
        if self.request.user.is_staff:
            return Message.objects.all()
        return self.request.user.messages.all()
    def perform_create(self, serializer):
        if self.request.user.is_staff:
            serializer.save()
        else:
            serializer.save(owner=self.request.user)