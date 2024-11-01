from django.contrib import admin
from .models import Candidato, Endereco, ExperienciaProfissional, FormacaoAcademica

# Registro básico para todos os modelos
admin.site.register(Candidato)
admin.site.register(Endereco)
admin.site.register(ExperienciaProfissional)
admin.site.register(FormacaoAcademica)
