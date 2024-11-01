from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Página inicial
    path('dados-basicos/', views.dados_basicos, name='dados_basicos'),  # Página para dados básicos
    path('experiencia/', views.experiencia, name='experiencia'),  # Página para experiências
    path('formacao/', views.formacao, name='formacao'),  # Página para formações
    path('analisar/', views.analisar, name='analisar'),  # Página para analisar todos os dados preenchidos pelo candidato
    path('api/candidatos/', views.CandidatoListCreateView.as_view(), name='candidato_list_create'),  # API para listar e criar candidatos
    path('api/list_candidatos/', views.CandidatoListCreateView.as_view(), name='list_candidatos_api'),  # API para listar candidatos
    path('list_candidatos/', views.list_candidatos, name='list_candidatos'),  # Nova URL para consultar candidatos
]
