# Generated by Django 3.2.1 on 2022-04-07 20:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='image_mobile',
        ),
    ]
