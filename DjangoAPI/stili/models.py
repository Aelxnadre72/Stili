from random import choices
from django.db import models
from django.utils.translation import gettext as _

# Create your models here.
class User(models.Model):

    class Experience(models.IntegerChoices):
        BEGINNER = '1', _('Beginner')
        MEDIOCRE = '2', _('Mediocre')
        VETERAN = '3', _('Veteran')


    firstName = models.CharField(max_length=100, default='firstname')
    surname = models.CharField(max_length=100, default='surname')
    phoneNumber = models.TextField(default='00000000')
    age = models.IntegerField(default=18)
    experience = models.IntegerField(choices=Experience.choices, default=1)
    location = models.TextField(default='location')
    password = models.TextField(default='password')

    def __str__(self):
        return self.firstName