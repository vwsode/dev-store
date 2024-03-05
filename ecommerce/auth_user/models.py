from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    date_of_birth = models.DateField(null=True, blank=False)
    REQUIRED_FIELDS = ["date_of_birth", "first_name", "last_name"]

    def __str__(self):
        return self.username