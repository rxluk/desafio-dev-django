function limparLocalStorage() {
    // Limpa todos os dados do localStorage
    localStorage.clear();
    console.log("Dados do localStorage foram limpos.");
}


// Função para salvar dados no localStorage
function salvarDados() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const pais = document.getElementById('pais').value;
    const estado = document.getElementById('estado').value;
    const cidade = document.getElementById('cidade').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;

    const dados = {
        nome,
        sobrenome,
        dataNascimento,
        email,
        telefone,
        pais,
        estado,
        cidade,
        rua,
        numero,
        bairro
    };

    localStorage.setItem('dadosBasicos', JSON.stringify(dados));
}

// Função para carregar dados do localStorage
function carregarDados() {
    const dados = JSON.parse(localStorage.getItem('dadosBasicos')) || {};

    document.getElementById('nome').value = dados.nome || '';
    document.getElementById('sobrenome').value = dados.sobrenome || '';
    document.getElementById('data_nascimento').value = dados.dataNascimento || '';
    document.getElementById('email').value = dados.email || '';
    document.getElementById('telefone').value = dados.telefone || '';
    document.getElementById('pais').value = dados.pais || '';
    document.getElementById('estado').value = dados.estado || '';
    document.getElementById('cidade').value = dados.cidade || '';
    document.getElementById('rua').value = dados.rua || '';
    document.getElementById('numero').value = dados.numero || '';
    document.getElementById('bairro').value = dados.bairro || '';
}

// Função para adicionar uma nova experiência
function adicionarExperiencia() {
    const container = document.getElementById('experiencias-container');

    // Cria um novo elemento de experiência
    const experienciaDiv = document.createElement('div');
    experienciaDiv.classList.add('experiencia', 'mb-2', 'p-2', 'border', 'w-100');

    // HTML da nova experiência
    experienciaDiv.innerHTML = `
      <div class="form-group">
          <label for="empresa">Empresa:</label>
          <input type="text" class="form-control" name="empresa" placeholder="Digite o nome da empresa" required>
      </div>
      <div class="form-group">
          <label for="cargo">Cargo:</label>
          <input type="text" class="form-control" name="cargo" placeholder="Digite seu cargo" required>
      </div>
      <div class="form-group">
          <label for="data_inicio">Data de Início:</label>
          <input type="date" class="form-control" name="ano_mes_entrada" required>
      </div>
      <div class="form-group">
          <label for="data_fim">Data de Fim:</label>
          <input type="date" class="form-control" name="ano_mes_saida">
      </div>
      <div class="form-group">
          <label for="descricao">Descrição:</label>
          <textarea class="form-control" name="descricao" placeholder="Digite uma descrição" required></textarea>
      </div>
      <button type="button" class="btn btn-danger" onclick="removerExperiencia(this)">Remover</button>
  `;

    container.appendChild(experienciaDiv);
}

// Função para remover uma experiência
function removerExperiencia(button) {
    button.parentElement.remove();
}

// Função para salvar experiências no localStorage
function salvarExperiencias() {
    const experiencias = [];
    const experienciaElements = document.querySelectorAll('.experiencia');

    experienciaElements.forEach(element => {
        const empresaInput = element.querySelector('input[name="empresa"]');
        const cargoInput = element.querySelector('input[name="cargo"]');
        const dataInicioInput = element.querySelector('input[name="ano_mes_entrada"]');
        const dataFimInput = element.querySelector('input[name="ano_mes_saida"]');
        const descricaoInput = element.querySelector('textarea[name="descricao"]');

        const empresa = empresaInput.value.trim();
        const cargo = cargoInput.value.trim();
        const dataInicio = dataInicioInput.value.trim();
        const dataFim = dataFimInput.value.trim();
        const descricao = descricaoInput.value.trim();

        if (empresa) {
            experiencias.push({ empresa, cargo, dataInicio, dataFim, descricao });
        }
    });

    console.log('Salvando experiências:', experiencias); // Debug
    localStorage.setItem('experiencias', JSON.stringify(experiencias));
}

// Função para carregar experiências do localStorage
function carregarExperiencias() {
    const experiencias = JSON.parse(localStorage.getItem('experiencias')) || [];
    console.log('Carregando experiências:', experiencias); // Debug

    experiencias.forEach(exp => {
        const container = document.getElementById('experiencias-container');

        const experienciaDiv = document.createElement('div');
        experienciaDiv.classList.add('experiencia', 'mb-2', 'p-2', 'border', 'w-100');

        experienciaDiv.innerHTML = `
            <div class="form-group">
                <label for="empresa">Empresa:</label>
                <input type="text" class="form-control" value="${exp.empresa}" name="empresa" placeholder="Digite o nome da empresa" required>
            </div>
            <div class="form-group">
                <label for="cargo">Cargo:</label>
                <input type="text" class="form-control" value="${exp.cargo}" name="cargo" placeholder="Digite seu cargo" required>
            </div>
            <div class="form-group">
                <label for="data_inicio">Data de Início:</label>
                <input type="date" class="form-control" value="${exp.dataInicio}" name="ano_mes_entrada" required>
            </div>
            <div class="form-group">
                <label for="data_fim">Data de Fim:</label>
                <input type="date" class="form-control" value="${exp.dataFim}" name="ano_mes_saida">
            </div>
            <div class="form-group">
                <label for="descricao">Descrição:</label>
                <textarea class="form-control" name="descricao" placeholder="Digite uma descrição" required>${exp.descricao}</textarea>
            </div>
            <button type="button" class="btn btn-danger" onclick="removerExperiencia(this)">Remover</button>
        `;

        container.appendChild(experienciaDiv);
    });
}

// Função para adicionar uma nova formação
function adicionarFormacao() {
    const container = document.getElementById('formacoes-container');

    // Cria um novo elemento de formação
    const formacaoDiv = document.createElement('div');
    formacaoDiv.classList.add('formacao', 'mb-2', 'p-2', 'border', 'w-100');

    // HTML da nova formação
    formacaoDiv.innerHTML = `
    <div class="form-group">
        <label for="instituicao">Instituição:</label>
        <input type="text" class="form-control" placeholder="Digite o nome da instituição" name="instituicao" required>
    </div>
    <div class="form-group">
        <label for="curso">Curso:</label>
        <input type="text" class="form-control" placeholder="Digite o curso" name="curso" required>
    </div>
    <div class="form-group">
        <label for="periodo">Período Atual:</label>
        <input type="number" class="form-control" placeholder="Digite seu período atual" name="periodo" required>
    </div>
    <div class="form-group">
        <label for="duracao_curso">Duração do Curso (em períodos):</label>
        <input type="number" class="form-control" placeholder="Digite a duração do curso" name="duracao_curso" required>
    </div>
    <div class="form-group">
        <label for="ano_conclusao">Ano de Conclusão:</label>
        <input type="number" class="form-control" placeholder="Digite o ano de conclusão" name="ano_conclusao" required>
    </div>
    <div class="form-group">
        <label for="status">Status:</label>
        <select class="form-control" name="status" required>
            <option value="Cursando">Cursando</option>
            <option value="Formado">Formado</option>
        </select>
    </div>
    <button type="button" class="btn btn-danger" onclick="removerFormacao(this)">Remover</button>
`;


    container.appendChild(formacaoDiv);
}

// Função para remover uma formação
function removerFormacao(button) {
    button.parentElement.remove();
}

// Função para salvar formações no localStorage
function salvarFormacoes() {
    const formacoes = [];
    const formacaoElements = document.querySelectorAll('.formacao');

    formacaoElements.forEach(element => {
        const instituicaoInput = element.querySelector('input[name="instituicao"]');
        const cursoInput = element.querySelector('input[name="curso"]');
        const periodoInput = element.querySelector('input[name="periodo"]');
        const duracaoInput = element.querySelector('input[name="duracao_curso"]'); // Corrigido o name
        const anoConclusaoInput = element.querySelector('input[name="ano_conclusao"]');
        const statusSelect = element.querySelector('select[name="status"]'); // Adicionado o name

        const instituicao = instituicaoInput ? instituicaoInput.value : '';
        const curso = cursoInput ? cursoInput.value : '';
        const periodo = periodoInput ? periodoInput.value : '';
        const duracao = duracaoInput ? duracaoInput.value : '';
        const anoConclusao = anoConclusaoInput ? anoConclusaoInput.value : '';
        const status = statusSelect ? statusSelect.value : '';

        // Apenas adiciona a formação se o campo instituição não estiver vazio
        if (instituicao) {
            formacoes.push({ instituicao, curso, periodo, duracao, anoConclusao, status });
        }
    });

    console.log('Salvando formações:', formacoes); // Debug
    localStorage.setItem('formacoes', JSON.stringify(formacoes));
}

// Função para carregar formações do localStorage
function carregarFormacoes() {
    const formacoes = JSON.parse(localStorage.getItem('formacoes')) || [];
    console.log('Carregando formações:', formacoes); // Debug

    formacoes.forEach(form => {
        const container = document.getElementById('formacoes-container');

        // Cria um novo elemento de formação com dados preenchidos
        const formacaoDiv = document.createElement('div');
        formacaoDiv.classList.add('formacao', 'mb-2', 'p-2', 'border', 'w-100');

        // HTML da nova formação com dados preenchidos
        formacaoDiv.innerHTML = `
            <div class="form-group">
                <label for="instituicao">Instituição:</label>
                <input type="text" class="form-control" value="${form.instituicao}" placeholder="Digite o nome da instituição" name="instituicao" required>
            </div>
            <div class="form-group">
                <label for="curso">Curso:</label>
                <input type="text" class="form-control" value="${form.curso}" placeholder="Digite o nome do curso" name="curso" required>
            </div>
            <div class="form-group">
                <label for="periodo">Período Atual:</label>
                <input type="number" class="form-control" value="${form.periodo}" placeholder="Digite seu período atual" name="periodo" required>
            </div>
            <div class="form-group">
                <label for="duracao_curso">Duração do Curso (em períodos):</label>
                <input type="number" class="form-control" value="${form.duracao}" placeholder="Digite a duração do curso" name="duracao_curso" required>
            </div>
            <div class="form-group">
                <label for="ano_conclusao">Ano de Conclusão:</label>
                <input type="number" class="form-control" value="${form.anoConclusao}" placeholder="Digite o ano de conclusão" name="ano_conclusao" required>
            </div>
            <div class="form-group">
                <label for="status">Status:</label>
                <select class="form-control" name="status" required>
                    <option value="Cursando" ${form.status === 'Cursando' ? 'selected' : ''}>Cursando</option>
                    <option value="Formado" ${form.status === 'Formado' ? 'selected' : ''}>Formado</option>
                </select>
            </div>
            <button type="button" class="btn btn-danger" onclick="removerFormacao(this)">Remover</button>
        `;

        container.appendChild(formacaoDiv);
    });
}


// Função para gerar e exibir o relatório
function relatorio() {
    const relatorioDiv = document.getElementById('relatorio');

    // Limpa o conteúdo anterior
    relatorioDiv.innerHTML = '';

    // Carrega os dados básicos
    const dadosBasicos = JSON.parse(localStorage.getItem('dadosBasicos')) || {};

    // Formata e exibe os dados básicos
    relatorioDiv.innerHTML += `<h4>Dados Básicos</h4>
        <p><strong>Nome:</strong> ${dadosBasicos.nome || "N/A"}</p>
        <p><strong>Sobrenome:</strong> ${dadosBasicos.sobrenome || "N/A"}</p>
        <p><strong>Data de Nascimento:</strong> ${dadosBasicos.dataNascimento || "N/A"}</p>
        <p><strong>Email:</strong> ${dadosBasicos.email || "N/A"}</p>
        <p><strong>Telefone:</strong> ${dadosBasicos.telefone || "N/A"}</p>
        <p><strong>Endereço:</strong> ${dadosBasicos.rua || "N/A"}, ${dadosBasicos.numero || "N/A"}, ${dadosBasicos.bairro || "N/A"}, ${dadosBasicos.cidade || "N/A"} - ${dadosBasicos.estado || "N/A"}</p>`;

    // Carrega e exibe as experiências
    const experiencias = JSON.parse(localStorage.getItem("experiencias")) || [];
    relatorioDiv.innerHTML += `<h4>Experiências</h4>`;
    if (experiencias.length > 0) {
        experiencias.forEach(exp => {
            relatorioDiv.innerHTML += `
                <p><strong>Empresa:</strong> ${exp.empresa || "N/A"}</p>
                <p><strong>Cargo:</strong> ${exp.cargo || "N/A"}</p>
                <p><strong>Data de Início:</strong> ${exp.dataInicio || "N/A"}</p>
                <p><strong>Data de Fim:</strong> ${exp.dataFim || 'N/A'}</p>
                <p><strong>Descrição:</strong> ${exp.descricao || 'N/A'}</p>
                <hr>`;
        });
    } else {
        relatorioDiv.innerHTML += "<p>Nenhuma experiência registrada.</p>";
    }

    // Carrega e exibe as formações
    const formacoes = JSON.parse(localStorage.getItem("formacoes")) || [];
    relatorioDiv.innerHTML += `<h4>Formações Acadêmicas</h4>`;
    if (formacoes.length > 0) {
        formacoes.forEach(form => {
            relatorioDiv.innerHTML += `
                <p><strong>Instituição:</strong> ${form.instituicao || "N/A"}</p>
                <p><strong>Curso:</strong> ${form.curso || "N/A"}</p>
                <p><strong>Período Atual:</strong> ${form.periodo || "N/A"}</p>
                <p><strong>Duração do Curso:</strong> ${form.duracao || "N/A"} períodos</p>
                <p><strong>Ano de Conclusão:</strong> ${form.anoConclusao || "N/A"}</p>
                <p><strong>Status:</strong> ${form.status || "N/A"}</p>
                <hr>`;
        });
    } else {
        relatorioDiv.innerHTML += "<p>Nenhuma formação registrada.</p>";
    }
}

function validarDadosBasicos() {
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const dataNascimento = document.getElementById('data_nascimento').value;
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const pais = document.getElementById('pais').value.trim();
    const estado = document.getElementById('estado').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const rua = document.getElementById('rua').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const bairro = document.getElementById('bairro').value.trim();

    // Valida Nome
    if (!nome) {
        alert("O nome é obrigatório.");
        return false;
    }

    // Valida Sobrenome
    if (!sobrenome) {
        alert("O sobrenome é obrigatório.");
        return false;
    }

    // Valida Data de Nascimento
    if (!dataNascimento) {
        alert("A data de nascimento é obrigatória.");
        return false;
    }

    // Valida Email
    if (!email) {
        alert("O email é obrigatório.");
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("O email deve ser válido.");
        return false;
    }

    // Valida Telefone
    const telefoneRegex = /^\(?\d{2}\)? ?(?:\d{5}-\d{4}|\d{4}-\d{4})$/;
    if (!telefone) {
        alert("O telefone é obrigatório.");
        return false;
    }
    if (!telefoneRegex.test(telefone)) {
        alert("O telefone deve estar no formato válido (ex: (xx) xxxxx-xxxx ou xx xxxx-xxxx).");
        return false;
    }

    // Valida País
    if (!pais) {
        alert("O país é obrigatório.");
        return false;
    }

    // Valida Estado
    if (!estado) {
        alert("O estado é obrigatório.");
        return false;
    }
    if (!/^[A-Z]{2}$/.test(estado)) {
        alert("O estado deve ser uma sigla de duas letras.");
        return false;
    }

    // Valida Cidade
    if (!cidade) {
        alert("A cidade é obrigatória.");
        return false;
    }

    // Valida Rua
    if (!rua) {
        alert("A rua é obrigatória.");
        return false;
    }

    // Valida Número
    if (!numero) {
        alert("O número é obrigatório.");
        return false;
    }

    // Valida Bairro
    if (!bairro) {
        alert("O bairro é obrigatório.");
        return false;
    }

    // Se todas as validações passarem
    return true;
}

function validarExperiencia() {
    const experiencias = document.querySelectorAll('.experiencia');
    const erros = [];

    experiencias.forEach((experiencia, index) => {
        const empresaInput = experiencia.querySelector('input[placeholder="Digite o nome da empresa"]');
        const cargoInput = experiencia.querySelector('input[placeholder="Digite seu cargo"]');
        const dataInicioInput = experiencia.querySelector('input[name="data_inicio"]');
        const dataFimInput = experiencia.querySelector('input[name="data_fim"]');
        const descricaoInput = experiencia.querySelector('textarea[placeholder="Digite uma descrição"]');

        const empresa = empresaInput.value.trim();
        const cargo = cargoInput.value.trim();
        const dataInicio = dataInicioInput.value;
        const dataFim = dataFimInput.value;
        const descricao = descricaoInput.value.trim();

        if (!empresa) {
            erros.push(`Experiência ${index + 1}: O nome da empresa é obrigatório.`);
        }
        if (!cargo) {
            erros.push(`Experiência ${index + 1}: O cargo é obrigatório.`);
        }
        if (!dataInicio) {
            erros.push(`Experiência ${index + 1}: A data de início é obrigatória.`);
        }
        if (dataFim && new Date(dataFim) < new Date(dataInicio)) {
            erros.push(`Experiência ${index + 1}: A data de fim não pode ser anterior à data de início.`);
        }
        if (!descricao) {
            erros.push(`Experiência ${index + 1}: A descrição é obrigatória.`);
        }
    });

    if (erros.length > 0) {
        alert(erros.join('\n'));
        return false;
    }

    return true;
}


function validarFormacao() {
    const formacaoElements = document.querySelectorAll('.formacao');
    const formacoesInvalidas = [];

    formacaoElements.forEach((element, index) => {
        // Agora estamos selecionando os elementos pelo atributo 'name'
        const instituicaoInput = element.querySelector('input[name="instituicao"]');
        const cursoInput = element.querySelector('input[name="curso"]');
        const anoConclusaoInput = element.querySelector('input[name="ano_conclusao"]');
        const periodoInput = element.querySelector('input[name="periodo"]');

        const instituicao = instituicaoInput ? instituicaoInput.value.trim() : '';
        const curso = cursoInput ? cursoInput.value.trim() : '';
        const anoConclusao = anoConclusaoInput ? anoConclusaoInput.value.trim() : '';
        const periodo = periodoInput ? periodoInput.value.trim() : '';

        // Valida o nome da instituição
        if (!instituicao) {
            formacoesInvalidas.push(`Instituição é obrigatória na formação ${index + 1}.`);
        }

        // Valida o curso
        if (!curso) {
            formacoesInvalidas.push(`Curso é obrigatório na formação ${index + 1}.`);
        }

        // Valida o ano de conclusão
        if (!anoConclusao) {
            formacoesInvalidas.push(`Ano de conclusão é obrigatório na formação ${index + 1}.`);
        } else if (!/^\d{4}$/.test(anoConclusao)) {
            formacoesInvalidas.push(`Ano de conclusão deve ser um número de 4 dígitos na formação ${index + 1}.`);
        }

        // Valida o período
        if (!periodo) {
            formacoesInvalidas.push(`Período é obrigatório na formação ${index + 1}.`);
        } else if (!/^\d+$/.test(periodo)) {
            formacoesInvalidas.push(`Período deve ser um número inteiro na formação ${index + 1}.`);
        }
    });

    if (formacoesInvalidas.length > 0) {
        alert(formacoesInvalidas.join('\n')); // Exibe os erros em um alerta
        return false; // Retorna false se houver erros
    }

    return true; // Retorna true se todas as validações forem bem-sucedidas
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function confirmarDados() {
    const dadosBasicos = JSON.parse(localStorage.getItem('dadosBasicos')) || {};
    const experiencias = JSON.parse(localStorage.getItem("experiencias")) || [];
    const formacoes = JSON.parse(localStorage.getItem("formacoes")) || [];

    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

    const candidatoData = {
        nome: dadosBasicos.nome || null,
        sobrenome: dadosBasicos.sobrenome || null,
        data_nascimento: dadosBasicos.dataNascimento || null,
        email: dadosBasicos.email || null,
        telefone: dadosBasicos.telefone || null,
        endereco: {
            rua: dadosBasicos.rua || null,
            numero: dadosBasicos.numero ? Number(dadosBasicos.numero) : null,
            bairro: dadosBasicos.bairro || null,
            cidade: dadosBasicos.cidade || null,
            estado: dadosBasicos.estado || null,
            pais: dadosBasicos.pais || null
        },
        experiencias_profissionais: experiencias.map(exp => ({
            empresa: exp.empresa || null,
            cargo: exp.cargo || null,
            ano_mes_entrada: exp.dataInicio || null,
            ano_mes_saida: exp.dataFim || null,
            descricao: exp.descricao || null
        })),
        formacoes_academicas: formacoes.map(form => ({
            instituicao: form.instituicao || null,
            curso: form.curso || null,
            periodo: form.periodo ? parseInt(form.periodo) : null,
            duracao_curso: form.duracao ? parseInt(form.duracao) : null,
            ano_conclusao: form.anoConclusao ? parseInt(form.anoConclusao) : null,
            status: form.status || null
        }))
    };

    console.log("JSON Enviado para API:", JSON.stringify(candidatoData, null, 2));

    fetch('/api/candidatos/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
        },
        body: JSON.stringify(candidatoData),
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => {
                throw new Error(err.detail || 'Erro ao enviar os dados');
            });
        }
        return response.json();
    })
    .then(data => {
        alert('Dados confirmados com sucesso!');
        window.location.href = 'https://digitalsys.com.br/';
    })
    .catch(error => {
        alert('Erro: ' + error.message);
    });
}
