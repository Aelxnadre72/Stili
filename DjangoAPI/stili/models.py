from django.db import models

# Create your models here.
class User(models.Model):
    firstName = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.firstName