import { getUsers } from "../../../utils/localStorage.js";
const form = document.getElementById('form-login');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
    const usuariosGuardados = getUsers();
    const usuariosEncontrado = usuariosGuardados.find(u => u.email === email && u.password === password);
    if (usuariosEncontrado) {
        localStorage.setItem('userData', JSON.stringify(usuariosEncontrado));
        alert("Bienvenido" + usuariosEncontrado.email);
        form.reset();
    }
    else {
        alert("Email incorrecto, ingrese otro email para registrasse");
    }
});
