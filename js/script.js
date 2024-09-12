document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita o comportamento padrão do formulário de ser enviado

            // Obtém os valores dos campos de entrada
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Exibe os dados no console do navegador
            console.log("Usuário:", username);
            console.log("Senha:", password);

            // Chama a função para fazer o login
            EntrarCadastro(username, password);
        });
    }
});

async function EntrarCadastro(username, password) {
    try {
        const response = await fetch('http://localhost:5109/api/Autenticacao/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,  // Ajuste para o nome correto do campo se necessário
                senhaHash: password  // Ajuste para o nome correto do campo se necessário
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Login bem-sucedido:", data);
            window.location.href = "quizes.html"; // Redireciona para a página principal do quiz após login
        } else {
            console.error('Credenciais inválidas');
            alert('Credenciais inválidas. Verifique seu e-mail e senha.');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao tentar realizar login. Por favor, tente novamente mais tarde.');
    }
}

// Script para alternar a visibilidade da senha
document.addEventListener("DOMContentLoaded", function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            togglePassword.textContent = type === 'password' ? 'Mostrar Senha' : 'Ocultar Senha';
        });
    }
});
