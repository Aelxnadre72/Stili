from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('firstName', 'surname', 'phoneNumber', 'age', 'experience', 'location', 'password', 'isAdmin')