from django.db import models
from datetime import date

class Candidato(models.Model):
    nome = models.CharField(max_length=255, null=False, blank=False)
    sobrenome = models.CharField(max_length=255, null=False, blank=False)
    data_nascimento = models.DateField(null=False, blank=False)
    email = models.EmailField(unique=True, null=False, blank=False)
    telefone = models.CharField(max_length=15, null=False, blank=False)

    @property
    def idade(self):
        today = date.today()
        idade = today.year - self.data_nascimento.year
        if (today.month, today.day) < (self.data_nascimento.month, self.data_nascimento.day):
            idade -= 1
        return idade

    def __str__(self):
        return f"{self.nome} {self.sobrenome} (Idade: {self.idade})"

    class Meta:
        verbose_name = "Candidato"
        verbose_name_plural = "Candidatos"


class Endereco(models.Model):
    candidato = models.OneToOneField(Candidato, on_delete=models.CASCADE, related_name="endereco")
    pais = models.CharField(max_length=100, null=False, blank=False)
    estado = models.CharField(max_length=100, null=False, blank=False)
    cidade = models.CharField(max_length=100, null=False, blank=False)
    bairro = models.CharField(max_length=100, null=False, blank=False)
    rua = models.CharField(max_length=255, null=False, blank=False)
    numero = models.IntegerField(null=False, blank=False)

    def __str__(self):
        return f"{self.rua}, {self.numero}, {self.bairro}, {self.cidade}, {self.estado}, {self.pais}"

    class Meta:
        verbose_name = "Endereço"
        verbose_name_plural = "Endereços"


class ExperienciaProfissional(models.Model):
    candidato = models.ForeignKey(Candidato, on_delete=models.CASCADE, related_name="experiencias_profissionais")
    cargo = models.CharField(max_length=100, null=False, blank=False)
    empresa = models.CharField(max_length=100, null=False, blank=False)
    ano_mes_entrada = models.DateField(null=False, blank=False)
    ano_mes_saida = models.DateField(null=True, blank=True)
    descricao = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.cargo} na {self.empresa} ({self.ano_mes_entrada} a {self.ano_mes_saida or 'Atual'})"

    class Meta:
        verbose_name = "Experiência Profissional"
        verbose_name_plural = "Experiências Profissionais"


class FormacaoAcademica(models.Model):
    candidato = models.ForeignKey(Candidato, on_delete=models.CASCADE, related_name="formacoes_academicas")
    instituicao = models.CharField(max_length=100, null=False, blank=False)
    curso = models.CharField(max_length=100, null=False, blank=False)
    periodo = models.IntegerField(null=True, blank=True)
    duracao_curso = models.IntegerField(null=True, blank=True)
    ano_conclusao = models.IntegerField(null=True, blank=True)
    status = models.CharField(
        max_length=50,
        choices=[("Cursando", "Cursando"), ("Formado", "Formado")],
        null=False,
        blank=False
    )

    def __str__(self):
        return f"{self.curso} na {self.instituicao} (Ano de Conclusão: {self.ano_conclusao})"

    class Meta:
        verbose_name = "Formação Acadêmica"
        verbose_name_plural = "Formações Acadêmicas"
