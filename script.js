const login = document.getElementById('login-trybewarts');
const password = document.getElementById('password-trybewarts');
const button = document.getElementById('button-login');

const checkLoginData = () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
};

button.addEventListener('click', checkLoginData);
