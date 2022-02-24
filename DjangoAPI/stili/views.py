from django.shortcuts import render
from .serializer import EventSerializer, UserSerializer
from rest_framework import viewsets, status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import User, Event

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

def front(request):
    context = {}
    return render(request, "index.html", context)

@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def user(request):
    if request.method == 'GET':
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EventView(viewsets.ModelViewSet):
    seralizer_class = EventSerializer
    queryset = Event.objects.all

def events(request):
    context = {}
    return render(request, "index.html", context)

