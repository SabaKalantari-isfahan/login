
function validateLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username === 'admin' && password === '1234') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password!');
    }
}