from multiprocessing import Event
from rest_framework import serializers
from .models import User, Event as eventt

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['firstName', 'surname', 'phoneNumber', 'age', 'experience', 'location', 'password', 'isAdmin']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = eventt
        fields = ['eventID', 'eventName', 'eventDate', 'eventDifficulty', 'eventDescription', 'eventArea', 'eventLocation', 'eventSize', 'hours']