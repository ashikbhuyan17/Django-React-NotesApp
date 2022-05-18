from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from rest_framework import status
# Create your views here.



@api_view(['GET'])
def getRouter(request):
    list = [
        {
            'name':'ashik'
        }
    ]
    return Response(list)


@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes,many=True)
    return Response(serializer.data)    


@api_view(['GET'])
def getNote(request, pk):
    try:
        notes = Note.objects.get(pk=pk)
        print("...............",notes)
    except Note.DoesNotExist:
        return Response({'error':'object not found !!'},status=status.HTTP_404_NOT_FOUND)    

    serializer= NoteSerializer(notes)  
    return Response(serializer.data)      

        