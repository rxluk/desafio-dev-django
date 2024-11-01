from rest_framework import generics
from .models import Candidato
from .serializers import CandidatoSerializer
from django.shortcuts import render

# Página inicial para seleção entre candidato e recrutador
def index(request):
    return render(request, 'index.html')

# Página para criar dados básicos do candidato e endereço
def dados_basicos(request):
    return render(request, 'dados_basicos.html')

# Página para adicionar experiências
def experiencia(request):
    return render(request, 'experiencia.html')

# Página para adicionar formações
def formacao(request):
    return render(request, 'formacao.html')

# Página para analisar todos os dados preenchidos pelo candidato
def analisar(request):
    return render(request, 'analisar.html')

# API para listar e criar candidatos com dados completos (endereço, experiências e formações)
class CandidatoListCreateView(generics.ListCreateAPIView):
    queryset = Candidato.objects.all()
    serializer_class = CandidatoSerializer

# View para renderizar lista de candidatos para o recrutador
def list_candidatos(request):
    if request.method == 'GET':
        candidatos = Candidato.objects.all()  # Obtém todos os candidatos
        # Caso queira retornar um JSON em vez de renderizar um template
        # candidatos_data = CandidatoSerializer(candidatos, many=True).data
        # return JsonResponse(candidatos_data, safe=False)
        return render(request, 'list_candidatos.html', {'candidatos': candidatos})
    else:
        return JsonResponse({'error': 'Método não permitido'}, status=405)
