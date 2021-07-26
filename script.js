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

// Requisito 21 - Nome completo:

const createNewName = () => {
  const newName = document.createElement('h2');
  const fullName = `${firstName.value} ${lastName.value}`;
  form.appendChild(newName);
  newName.innerText = `Nome: ${fullName}`;
};

// Requisito 21 - Email:

const createNewMail = () => {
  const newMail = document.createElement('h2');
  const mail = email.value;
  form.appendChild(newMail);
  newMail.innerText = `Email: ${mail}`;
};

// Requisito 21 - Casa:

const createNewHouse = () => {
  const newHouse = document.createElement('h2');
  const yourHouse = house.value;
  form.appendChild(newHouse);
  newHouse.innerText = `Casa: ${yourHouse}`;
};

// Requisito 21 - Família:

let valueFamily = '';
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  valueFamily = (form.family.value);
});

const createNewFamily = () => {
  const newFamily = document.createElement('h2');
  const yourFamily = valueFamily;
  form.appendChild(newFamily);
  newFamily.innerText = `Família: ${yourFamily}`;
};

// Requisito 21 - Matérias:
const classes = document.querySelectorAll('.subject');

const giveClasses = () => {
  let list = '';
  for (let index = 0; index < classes.length; index += 1) {
    if (classes[index].checked) {
      list += `${classes[index].value}, `;
    }
  }
  return list;
};

const createNewClasses = () => {
  const newClasses = document.createElement('h2');
  const yourClasses = giveClasses();
  form.appendChild(newClasses);
  newClasses.innerText = `Matérias: ${yourClasses}`;
  newClasses.classList.add('subject');
};

// Requisito 21 - Avaliação:

let valueRate = '';
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  valueRate = (form.rate.value);
});

const createNewReview = () => {
  const newReview = document.createElement('h2');
  const yourReview = valueRate;
  form.appendChild(newReview);
  newReview.innerText = `Avaliação: ${yourReview}`;
};

// Requisito 21 - Observações:

const createNewObs = () => {
  const newObs = document.createElement('h2');
  const yourMessage = message.value;
  form.appendChild(newObs);
  newObs.innerText = `Observações: ${yourMessage}`;
};

// Requisito 21 - Faz a mágica acontecer:

const resumedForm = () => {
  form.innerHTML = '';
  form.classList.add('display-form');
  createNewName();
  createNewMail();
  createNewHouse();
  createNewFamily();
  createNewClasses();
  createNewReview();
  createNewObs();
};

submitButton.addEventListener('click', resumedForm);
