document.addEventListener('DOMContentLoaded', () => {
    fetch('http://127.0.0.1:8000/api/list_candidatos/')
        .then(response => {
            // Verifique se a resposta é válida
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Exibindo os candidatos, assumindo que o retorno é um array direto
            displayCandidatos(data); 
        })
        .catch(error => console.error('Erro ao carregar candidatos:', error));
});

function displayCandidatos(candidatos) {
    const candidatosDiv = document.getElementById('candidatos');
    candidatosDiv.innerHTML = ''; // Limpa o conteúdo anterior

    if (candidatos.length === 0) {
        candidatosDiv.innerHTML = '<p>Nenhum candidato encontrado.</p>';
        return;
    }

    candidatos.forEach(candidato => {
        const candidatoDiv = document.createElement('div');
        candidatoDiv.className = 'candidato';

        candidatoDiv.innerHTML = `
            <h2>${candidato.nome || 'N/A'} ${candidato.sobrenome || ''}</h2>
            <div class="detalhes">
                <p><strong>Data de Nascimento:</strong> ${candidato.data_nascimento || 'N/A'}</p>
                <p><strong>Email:</strong> ${candidato.email || 'N/A'}</p>
                <p><strong>Telefone:</strong> ${candidato.telefone || 'N/A'}</p>
                <p><strong>Endereço:</strong> ${candidato.endereco ?
                    `${candidato.endereco.rua || 'N/A'}, ${candidato.endereco.numero || 'N/A'}, ${candidato.endereco.bairro || 'N/A'}, ${candidato.endereco.cidade || 'N/A'} - ${candidato.endereco.estado || 'N/A'} - ${candidato.endereco.pais || 'N/A'}` :
                    'N/A'}</p>
                <p><strong>Experiências Profissionais:</strong></p>
                <ul>
                    ${candidato.experiencias_profissionais.map(exp => `
                        <li>
                            <strong>Empresa:</strong> ${exp.empresa || 'N/A'}<br>
                            <strong>Cargo:</strong> ${exp.cargo || 'N/A'}<br>
                            <strong>Data de Início:</strong> ${exp.ano_mes_entrada || 'N/A'}<br>
                            <strong>Data de Fim:</strong> ${exp.ano_mes_saida || 'N/A'}<br>
                            <strong>Descrição:</strong> ${exp.descricao || 'N/A'}<br>
                        </li>
                    `).join('') || '<li>Nenhuma experiência registrada.</li>'}
                </ul>
                <p><strong>Formações Acadêmicas:</strong></p>
                <ul>
                    ${candidato.formacoes_academicas.map(form => `
                        <li>
                            <strong>Instituição:</strong> ${form.instituicao || 'N/A'}<br>
                            <strong>Curso:</strong> ${form.curso || 'N/A'}<br>
                            <strong>Período:</strong> ${form.periodo || 'N/A'}<br>
                            <strong>Duração:</strong> ${form.duracao_curso || 'N/A'} períodos<br>
                            <strong>Ano de Conclusão:</strong> ${form.ano_conclusao || 'N/A'}<br>
                            <strong>Status:</strong> ${form.status || 'N/A'}<br>
                        </li>
                    `).join('') || '<li>Nenhuma formação registrada.</li>'}
                </ul>
            </div>
        `;

        candidatosDiv.appendChild(candidatoDiv);
    });
}
