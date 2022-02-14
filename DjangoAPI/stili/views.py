from django.shortcuts import render

# Create your views here.
class User:
    def __init__(self, username, password, email):
        self.username = username
        self.password = password
        self.email = email

    def __str__(self):
        return self.username

class Admin(User):
    pass

