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

    // Mapeamento de respostas para tipos de perfil psicológico
    let perfilMap = {
        "Adapto-me facilmente": "Resiliente e Flexível",
        "Preciso de tempo para me ajustar": "Adaptável com suporte",
        "Fico muito desconfortável": "Resistente a mudanças",
        "Mantenho a calma e busco soluções": "Equilibrado sob pressão",
        "Fico ansioso, mas consigo resolver": "Reativo ao estresse",
        "Me sinto sobrecarregado e confuso": "Vulnerável ao estresse",
        "Tenho facilidade em me relacionar e entender os outros": "Empático e Sociável",
        "Prefiro interações mais superficiais": "Reservado Socialmente",
        "Tenho dificuldades em me abrir com os outros": "Introvertido e Reservado",
        "Aceito e vejo como oportunidade de aprendizado": "Construtivo com críticas",
        "Fico na defensiva, mas considero as críticas": "Cauteloso com críticas",
        "Fico muito abalado e magoado": "Sensível a críticas"
    };

    let perfilPsicologico = '';
    for (let answer of answers) {
        if (answer && perfilMap[answer]) {
            perfilPsicologico = perfilMap[answer];
            break;
        }
    }

    let result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = `<div class="feedback">Perfil Psicológico Identificado: ${perfilPsicologico || 'Não foi possível identificar um perfil com base nas respostas fornecidas'}</div>`;
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