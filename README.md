cat <<EOL > DOCUMENTATION.md
# Documentação do Projeto Pegho - Sistema de Recrutamento

## Índice
1. [Descrição do Projeto](#descrição-do-projeto)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Guia de Instalação](#guia-de-instalação)
5. [Uso do Sistema](#uso-do-sistema)
6. [Próximos Passos](#próximos-passos)
7. [Contribuições](#contribuições)

## Descrição do Projeto
O sistema de recrutamento Pegho é uma aplicação web desenvolvida em Django para facilitar o gerenciamento de currículos e processos seletivos. O projeto permite que candidatos se cadastrem, insiram suas experiências e formções, e que recrutadores analisem os dados coletados.

## Tecnologias Utilizadas
- **Back-end:** Django, Django REST Framework
- **Front-end:** HTML, CSS, JavaScript, Bootstrap
- **Banco de Dados:** SQLite (para desenvolvimento)

## Estrutura do Projeto
```
pegho_recrutamento/
├── curriculos/
│   ├── templates/                   # Templates HTML para renderização das páginas
│   │   ├── list_candidatos.html      # Página para listar candidatos (interface do recrutador)
│   │   ├── index.html                # Página inicial do projeto
│   │   ├── formacao.html             # Página para adição de formações acadêmicas
│   │   ├── experiencia.html          # Página para adição de experiências profissionais
│   │   ├── dados_basicos.html        # Página para cadastro de dados pessoais e endereço do candidato
│   │   └── analisar.html             # Página para análise final dos dados inseridos
│   │
│   ├── static/                       # Arquivos estáticos como CSS e JavaScript para front-end
│   │   ├── recrutador/               # Arquivos para a interface do recrutador
│   │   │   ├── js/
│   │   │   │   └── script.js         # Script JavaScript específico para recrutadores
│   │   │   └── css/
│   │   │       └── styles.css        # Estilos específicos para a interface do recrutador
│   │   ├── candidato/                # Arquivos para a interface do candidato
│   │   │   ├── js/
│   │   │   │   └── script.js         # Script JavaScript específico para candidatos
│   │   │   └── css/
│   │   │       └── styles.css        # Estilos específicos para a interface do candidato
│   │
│   ├── views.py                      # Views que controlam o fluxo de páginas e API para listagem/criação de candidatos
│   ├── urls.py                       # URL configurations específicas para a aplicação "curriculos"
│   ├── serializers.py                # Serializadores DRF para conversão e validação de dados entre modelos e JSON
│   ├── models.py                     # Modelos de dados para candidatos, endereços, experiências e formações
│   ├── admin.py                      # Configurações do Django Admin para gerenciamento de dados do candidato
│   ├── tests.py                      # Testes unitários e de integração da aplicação
│   └── apps.py                       # Configuração principal da aplicação Django "curriculos"
│
├── manage.py                         # Script de linha de comando para interações com o projeto Django
├── db.sqlite3                        # Banco de dados SQLite usado em desenvolvimento
│
└── pegho_recrutamento/
    ├── __init__.py                   # Arquivo de inicialização do projeto Django
    ├── asgi.py                       # ASGI configuration para servidores compatíveis com async
    ├── settings.py                   # Configurações principais do projeto Django, incluindo aplicações instaladas e banco de dados
    ├── urls.py                       # URLs principais do projeto
    └── wsgi.py                       # WSGI configuration para servidores web
```

## Guia de Instalação

### Pré-requisitos
- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)

### Passos para Instalação

1. **Clone o repositório:**
   ```
   git clone https://github.com/rxluk/desafio-dev-django.git
   cd pegho_recrutamento
   ```

2. **Crie um ambiente virtual (opcional, mas recomendado):**
   ```
   python -m venv env
   source env/bin/activate  # Linux/Mac
   env\Scripts\activate     # Windows
   ```

3. **Instale as dependências:**
   ```
   pip install -r requirements.txt
   ```

4. **Realize as migrações do banco de dados:**
   ```
   python manage.py migrate
   ```

5. **Inicie o servidor de desenvolvimento:**
   ```
   python manage.py runserver
   ```
   
6. **Para acessar o painel administrativo do Django, crie um superusuário com o seguinte comando:**
   ```
   python manage.py runserver
   ```

7. **Acesse o aplicativo:**  
   Abra o navegador e vá para `http://127.0.0.1:8000/`.

8.**Acesse o painel administrativo:**
   Para acessar o painel administrativo do Django, vá para `http://127.0.0.1:8000/admin/` e faça login com o superusuário que você criou.

## Uso do Sistema

### Funcionalidades
- Cadastro de Candidatos
- Adição de Experiências Profissionais
- Inserção de Formação Acadêmica
- Análise de Dados dos Candidatos

### Navegação
A interface é dividida em várias seções, incluindo:
- Dados Básicos
- Experiências Profissionais
- Formação Acadêmica
- Análise

## Próximos Passos

### Sugestões de Melhorias
1. **Autenticação para Recrutadores:**
   - Implementar um sistema de login e cadastro para recrutadores.
   - Permitir que recrutadores acessem e gerenciem os dados dos candidatos.

2. **Funcionalidades de Consulta:**
   - Adicionar views para consulta e edição de dados dos candidatos.
   - Implementar filtros e busca nos dados dos candidatos.

3. **Melhorias na Interface:**
   - Aprimorar o design da interface com mais elementos de UI/UX.
   - Adicionar validações e feedbacks para o usuário.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. Por favor, siga as diretrizes de contribuição.
