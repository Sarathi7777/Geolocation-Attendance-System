from rest_framework.serializers import ModelSerializer
from .models import *
class AttendanceSerializer(ModelSerializer):
    class Meta:
        model=Attendance
        fields=['title','body']
class LoginSerializer(ModelSerializer):
    class Meta:
        model=Login
        fields=['username','password']
