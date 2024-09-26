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
                        "Fortes habilidades de liderança e comunicação": "Gestor de Projetos",
                        "Experiência significativa em gerenciamento de projetos": "Gerente de Projetos",
                        "Conhecimentos avançados em ferramentas específicas da área": "Especialista Técnico",
                        "Criativo": "Designer",
                        "Prático": "Programador",
                        "Organizado": "Analista",
                        "Normal": "Escritório",
                        "Nervoso": "Home Office",
                        "Tento me acalmar": "Ambos",
                        "Introvertido": "Testador",
                        "Extrovertido": "Gerente de Projeto"
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