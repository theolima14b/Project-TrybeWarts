const login = document.getElementById('login-trybewarts');
const password = document.getElementById('password-trybewarts');
const button = document.getElementById('button-login');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const message = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
// Para o botão Submit:
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const form = document.querySelector('#evaluation-form');
const house = document.getElementById('house');
const family = document.getElementById('label-family');
const classes = document.getElementsByClassName('.subject');
const rate = document.getElementById('label-rate');

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

const createNewName = () => {
  const newName = document.createElement('h2');
  const fullName = `${firstName.value} ${lastName.value}`;
  form.appendChild(newName);
  newName.innerText = `Nome: ${fullName}`;
  newName.classList.add('after-submit');
};

const createNewMail = () => {
  const newMail = document.createElement('h2');
  const mail = email.value;
  form.appendChild(newMail);
  newMail.innerText = `Email: ${mail}`;
  newMail.classList.add('after-submit');
};

const createNewHouse = () => {
  const newHouse = document.createElement('h2');
  const yourHouse = house.value;
  form.appendChild(newHouse);
  newHouse.innerText = `Casa: ${yourHouse}`;
  newHouse.classList.add('after-submit');
};

const createNewFamily = () => {
  const newFamily = document.createElement('h2');
  const yourFamily = 'TESTE'; // ACERTAR - ADICIONAR CHECKED AO ELEMENTO - PEGAR O VALUE DO ELEMENTO CHECKED//
  form.appendChild(newFamily);
  newFamily.innerText = `Família: ${yourFamily}`;
  newFamily.classList.add('after-submit');
};

const createNewClasses = () => {
  const newClasses = document.createElement('h2');
  const yourClasses = 'TESTE'; // ACERTAR - ADICIONAR CHECKED AOS ELEMENTOS - PEGAR O VALUE DOS ELEMENTOS CHECKEDS//
  form.appendChild(newClasses);
  newClasses.innerText = `Matérias: ${yourClasses}`;
  newClasses.classList.add('after-submit');
  newClasses.classList.add('subject');
};

const createNewReview = () => {
  const newReview = document.createElement('h2');
  const yourReview = 'TESTE'; // ACERTAR - ADICIONAR CHECKED AO ELEMENTO - PEGAR O VALUE DO ELEMENTO CHECKED//
  form.appendChild(newReview);
  newReview.innerText = `Avaliação: ${yourReview}`;
  newReview.classList.add('after-submit');
};

const createNewObs = () => {
  const newObs = document.createElement('h2');
  const yourMessage = message.value;
  form.appendChild(newObs);
  newObs.innerText = `Observações: ${yourMessage}`;
  newObs.classList.add('after-submit');
};

const resumedForm = () => {
  form.innerHTML = '';
  createNewName();
  createNewMail();
  createNewHouse();
  createNewFamily();
  createNewClasses();
  createNewReview();
  createNewObs();
};

submitButton.addEventListener('click', resumedForm);

// Deve haver um campo com o formato "Família: Família Escolhida"
// Deve haver um campo com o formato "Matérias: Matérias, Marcadas, Aqui"
// Deve haver um campo com o formato "Avaliação: NotaAqui"
// Deve haver um campo com o formato "Observações: Observações aqui"
