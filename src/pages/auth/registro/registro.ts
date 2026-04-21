import { addUser } from "../../../utils/localStorage.js";
import { IUser } from "../../../types/IUser.js";

const form= document.getElementById('form-registro') as HTMLFormElement;

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email= (document.getElementById('email-reg')as HTMLInputElement).value;
    const password = (document.getElementById('password-reg') as HTMLInputElement).value;

    const nuevoUsuario : IUser ={
        email: email,
        password: password,
        rol: 'client',
    }

    addUser(nuevoUsuario);

    alert("Ususario resgitrado");
    form.reset();
});