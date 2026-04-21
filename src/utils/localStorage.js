export const getUsers = () => {
    const usersJson = localStorage.getItem('users');
    if (!usersJson)
        return [];
    return JSON.parse(usersJson);
};
export const addUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
};
