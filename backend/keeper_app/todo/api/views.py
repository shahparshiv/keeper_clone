from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import TaskModelSerializer, TaskUpdateSerializer
from ..models import Task
from django.contrib.auth.models import User

@api_view(['GET','POST'])
def task_list(request):
    if request.method == 'GET':
        qs = Task.objects.all()
        serializer = TaskModelSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TaskModelSerializer(data = request.data)
        if serializer.is_valid():
            print(request.data)
            # user = User.objects.get(username=request.data['author'])
            # user = 'admin'
            # serializer.save(author=user)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def update_task(request):
    print("Response received",request.data["pk"])
    if request.method == 'GET':
        qs = Task.objects.all()
        serializer = TaskModelSerializer(qs, many=True)
        return Response(serializer.data)
    
    pk = request.data["pk"]
    obj = Task.objects.get(id=pk)
    if request.method == 'POST':
        serializer = TaskUpdateSerializer(data = request.data)
        print(request.data)
        if serializer.is_valid():
            obj.status = request.data["status"]
            obj.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
