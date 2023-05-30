const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

let remainingAttempts = 3;

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = usernameInput.value;
    // ERROR 01: El programador copio la constante username para poder crear la constante pasword y olvido cambiarlo por passwordInput.value
    // DEFECTO 01: Se guarda un valor erroneo en la constante password
    const password = usernameInput.value;

    if (username === 'usuario' && password === 'contraseña') {
        // FALLO 01: El sistema no permite iniciar sesion pese a las creedenciales correctas
        messageDiv.textContent = '¡Inicio de sesión exitoso!';
        messageDiv.style.color = 'green';
        loginForm.reset();
    } else {
        remainingAttempts--;
        if (remainingAttempts >= 0) {
            // ERROR 02: El programador coloco un signo erroneo
            // DEFECTO 02: La condicion no es la correcta, deberia ser '>'
            // FALLO 02: El usuario puede intentar ingresar una vez mas de lo solicitado, en total 4 veces
            messageDiv.textContent = `Credenciales incorrectas. Te quedan ${remainingAttempts} intentos.`;
            messageDiv.style.color = 'red';
        } else {
            loginForm.reset();
            usernameInput.disabled = true;
            passwordInput.disabled = true;
            messageDiv.textContent = 'Has agotado tus intentos. Por favor, inténtalo más tarde.';
            messageDiv.style.color = 'red';
        }
    }
});
