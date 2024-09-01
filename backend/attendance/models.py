from django.db import models

# Create your models here.
class Attendance(models.Model):
    title=models.CharField(max_length=200)
    body=models.CharField(max_length=200)
class Login(models.Model):
    username=models.CharField(max_length=200)
    password=models.CharField(max_length=100,default='defaultpassword')