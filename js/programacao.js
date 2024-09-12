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
            