from random import choices
from django.db import models
from django.utils.translation import gettext as _

# Create your models here.
class User(models.Model):

    class Experience(models.IntegerChoices):
        BEGINNER = '1', _('Beginner')
        MEDIOCRE = '2', _('Mediocre')
        VETERAN = '3', _('Veteran')

    firstName = models.CharField(max_length=100, blank = False)
    surname = models.CharField(max_length=100, blank = False)
    phoneNumber = models.TextField(primary_key=True)
    age = models.IntegerField(blank = False)
    experience = models.IntegerField(choices=Experience.choices, blank = False)
    location = models.TextField(blank = False)
    password = models.TextField(blank = False)
    isAdmin = models.BooleanField(default=False)

    def __str__(self):
        return self.firstName