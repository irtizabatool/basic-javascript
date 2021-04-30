// Single Element 
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// Multiple Element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// MANIPULATING THE DOM
const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'John';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInputKeyboard = document.querySelector('#name');
nameInputKeyboard.addEventListener('input', e => {
  document.querySelector('.container').append(nameInputKeyboard.value);
});


// USER FORM SCRIPT

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
  }
}