from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .formatdata import format_batch
from .requests import batch_request

class get_data(APIView):
  permission_classes = [permissions.IsAuthenticated]
  def get(self, request):
    return Response(format_batch(batch_request))
  