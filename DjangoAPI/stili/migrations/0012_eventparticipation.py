# Generated by Django 4.0.2 on 2022-03-15 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stili', '0011_commercialuser'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventParticipation',
            fields=[
                ('participationID', models.CharField(max_length=1, primary_key=True, serialize=False)),
                ('eventID', models.CharField(max_length=1)),
                ('phoneNumber', models.TextField(max_length=100, unique=True)),
                ('firstName', models.CharField(max_length=100)),
                ('surName', models.CharField(max_length=100)),
            ],
        ),
    ]
