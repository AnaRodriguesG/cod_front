function calculateResult() {
    let answers = [];
    let questoes = document.querySelectorAll('.questao-container');
    questoes.forEach(questao => {
        let selectedOption = questao.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            answers.push(selectedOption.value);
        } else {
            answers.push(null);
        }
    });
    
    // Mapeamento de respostas para sugestões de profissões
    let profissaoMap = {
        "Pouco": "Pesquisador",
        "Médio": "Gerente de projetos",
        "Muito": "Assistente Social",
        "Enfrento e resolvo de forma aberta": "Advogado",
        "Tento resolver, mas evito confronto": "Mediador",
        "Tenho dificuldade em resolver conflitos": "Analista de dados",
        "Quase sempre": "Psicólogo",
        "Às vezes": "Engenheiro de Software",
        "Raramente": "Artista",
        "Um pouco": "Designer Gráfico",
        "Bastante": "Relações Públicas",
        "Não me afeta": "Empreendedor"
    };
    
    let sugestaoProfissao = '';
    for (let answer of answers) {
        if (answer && profissaoMap[answer]) {
            sugestaoProfissao = profissaoMap[answer];
            break;
        }
    }

    let result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = `<div class="feedback">Profissão Sugerida: ${sugestaoProfissao || 'Não foi possível sugerir uma profissão com base nas respostas fornecidas'}</div>`;
    
    // Chama a função para enviar o resultado
    enviarResultado(sugestaoProfissao);
}

function enviarResultado(sugestaoProfissao) {
    const resultado = {
        relatorio_Perfil: `Sugestão de Profissão: ${sugestaoProfissao || 'Não definido'}`,
        resultado_Teste: "Teste Exemplo" // Altere conforme necessário
    };

    fetch('http://localhost:5109/api/Resultado/salvar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resultado)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error('Erro ao salvar resultado:', error);
    });
}


