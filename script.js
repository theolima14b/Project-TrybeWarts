const login = document.getElementById('login-trybewarts');
const password = document.getElementById('password-trybewarts');
const button = document.getElementById('button-login');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const message = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

const checkLoginData = () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
};

button.addEventListener('click', checkLoginData);

const enableButton = () => {
  if (agreement.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

agreement.addEventListener('click', enableButton);

const countChar = () => {
  const currentLength = message.value.length;
  counter.innerText = 500 - currentLength;
};

message.addEventListener('keyup', countChar);
