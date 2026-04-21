import { addUser } from "../../../utils/localStorage.js";
const form = document.getElementById('form-registro');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-reg').value;
    const password = document.getElementById('password-reg').value;
    const nuevoUsuario = {
        email: email,
        password: password,
        rol: 'client',
    };
    addUser(nuevoUsuario);
    alert("Ususario resgitrado");
    form.reset();
});
