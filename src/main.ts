import { IUser } from "./types/IUser.js";

const checkSession = () => {
    const logueado = localStorage.getItem('userData');
    const user: IUser| null = logueado ? JSON.parse(logueado) : null;
    const ubicacionActual= window .location.pathname;

    if (!user && !ubicacionActual.includes('login.html') && !ubicacionActual.includes('registro.html')) {
    window.location.href ='/src/pages/auth/login/login.html';
    return;
    }

    if (user && user.rol === 'client' && ubicacionActual.includes('/admin/')) {
        alert("No tenés permisos de administrador");
        window.location.href = '/src/pages/client/home.html';
    } 
};

checkSession();