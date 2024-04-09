from rest_framework import routers
from .api import MessageViewSet

router = routers.DefaultRouter()
router.register('api/chat',MessageViewSet,'chat')

urlpatterns = router.urls