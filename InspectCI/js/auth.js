/* autenticación preliminar */

const users = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'inspector', password: 'inspector', role: 'inspector' }
];

function authenticate(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return user;
    }
    return null;
}