from rest_framework import routers
from .api import ContactViewSet

router = routers.DefaultRouter()
router.register('api/contact',ContactViewSet,'contact')

urlpatterns = router.urls