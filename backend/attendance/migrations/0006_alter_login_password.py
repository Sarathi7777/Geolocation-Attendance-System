# Generated by Django 5.1 on 2024-09-01 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0005_remove_login_email_login_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='login',
            name='password',
            field=models.CharField(default='defaultpassword', max_length=100),
        ),
    ]
