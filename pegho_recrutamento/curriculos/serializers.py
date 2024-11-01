from rest_framework import serializers
from .models import Candidato, Endereco, ExperienciaProfissional, FormacaoAcademica
import re

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ['rua', 'numero', 'bairro', 'cidade', 'estado', 'pais']

class ExperienciaProfissionalSerializer(serializers.ModelSerializer):
    ano_mes_entrada = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d'])
    ano_mes_saida = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d'], allow_null=True)

    class Meta:
        model = ExperienciaProfissional
        fields = '__all__'
        read_only_fields = ['candidato']

    def validate(self, data):
        ano_mes_entrada = data.get('ano_mes_entrada')
        ano_mes_saida = data.get('ano_mes_saida')
        if ano_mes_saida and ano_mes_entrada and ano_mes_saida < ano_mes_entrada:
            raise serializers.ValidationError("A data de saída não pode ser anterior à data de entrada.")
        return data

class FormacaoAcademicaSerializer(serializers.ModelSerializer):
    status = serializers.CharField(required=True)

    class Meta:
        model = FormacaoAcademica
        fields = '__all__'
        read_only_fields = ['candidato']

class CandidatoSerializer(serializers.ModelSerializer):
    endereco = EnderecoSerializer(required=True)
    experiencias_profissionais = ExperienciaProfissionalSerializer(many=True, required=False)
    formacoes_academicas = FormacaoAcademicaSerializer(many=True, required=False)
    sobrenome = serializers.CharField(required=True)
    data_nascimento = serializers.DateField(required=True, format='%Y-%m-%d', input_formats=['%Y-%m-%d'])

    class Meta:
        model = Candidato
        fields = [
            'nome',
            'sobrenome',
            'data_nascimento',
            'email',
            'telefone',
            'endereco',
            'experiencias_profissionais',
            'formacoes_academicas'
        ]

    def validate(self, data):
        """Valida se os dados obrigatórios no JSON aninhado estão presentes"""
        endereco_data = data.get('endereco')
        if not endereco_data:
            raise serializers.ValidationError({"endereco": "Os dados do endereço são obrigatórios."})

        if not data.get('sobrenome'):
            raise serializers.ValidationError({"sobrenome": "O sobrenome é obrigatório."})

        if not data.get('data_nascimento'):
            raise serializers.ValidationError({"data_nascimento": "A data de nascimento é obrigatória."})

        return data

    def create(self, validated_data):
        endereco_data = validated_data.pop('endereco')
        experiencias_data = validated_data.pop('experiencias_profissionais', [])
        formacoes_data = validated_data.pop('formacoes_academicas', [])

        candidato = Candidato.objects.create(**validated_data)
        Endereco.objects.create(candidato=candidato, **endereco_data)

        for experiencia in experiencias_data:
            ExperienciaProfissional.objects.create(candidato=candidato, **experiencia)

        for formacao in formacoes_data:
            FormacaoAcademica.objects.create(candidato=candidato, **formacao)

        return candidato
