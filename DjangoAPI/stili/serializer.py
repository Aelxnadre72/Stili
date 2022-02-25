from multiprocessing import Event
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['firstName', 'surname', 'phoneNumber', 'age', 'experience', 'location', 'password', 'isAdmin']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'