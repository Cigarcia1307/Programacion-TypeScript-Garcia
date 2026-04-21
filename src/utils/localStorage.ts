    import { IUser } from "../types/IUser";

    export const getUsers = () : IUser[] => {
        const usersJson =localStorage.getItem('users');
        if(!usersJson) return [] ;
        return JSON.parse (usersJson) as IUser[];
    };
    export const addUser = (user:IUser) : void =>{
        const users = getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }
    