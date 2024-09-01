from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import render
from .models import *
from .serializers import *
class DataView(APIView):
    serializer_class=AttendanceSerializer
    def get(self, request):
        detail = [{"title":detail.title,"body":detail.body}
                for detail in Attendance.objects.all()]
        
        return Response(detail)
    def post(self,request):
        serializer=AttendanceSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)