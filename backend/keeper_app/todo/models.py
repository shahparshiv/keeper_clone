from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    # author = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    status = models.BooleanField(default=False)

    def __str__(self):
        return str(self.title)