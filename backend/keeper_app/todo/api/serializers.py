from rest_framework import serializers
from ..models import Task

class TaskModelSerializer(serializers.ModelSerializer):
    # author = serializers.SerializerMethodField()
    class Meta:
        model = Task
        fields = ['id','description','title','status']

    # def get_author(self, obj):
    #     print(self)
    #     print(obj)
    #     return obj.author.username

class TaskUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields=['id','status']