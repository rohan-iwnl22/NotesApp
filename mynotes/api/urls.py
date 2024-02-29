from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes,name="routes"),
    path('notes/', views.getNotes,name="Notes"),
    path('notes/create/', views.createNote,name="createNotes"),
    path('notes/<str:pk>/update/', views.updateNote,name="updateNotes"),
    path('notes/<str:pk>/delete/', views.deleteNote,name="deleteNotes"),
    path('notes/<str:pk>/', views.getNote,name="Notes"),
]