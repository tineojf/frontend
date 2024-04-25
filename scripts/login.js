const btnIngresar = document.getElementById('btnIngresar');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const formLogin = document.getElementById('formLogin');
const spnEmail = document.getElementById('spnEmail');
const spnPassword = document.getElementById('spnPassword');

// console.log(btnIngresar);
// console.log(inputEmail);
// console.log(inputPassword);

formLogin.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = inputEmail.value;
  const password = inputPassword.value;

  console.log(email);
  console.log(password);

  //todo añadir colores segun corresponda (rojo, amarillo)
  //todo usuario incorrecto
  // valida que email & password no este vacio
  validateInput(inputEmail, spnEmail, 'email');
  validateInput(inputPassword, spnPassword, 'contraseña');
  
  //valida el email con regex 
  if (validateEmail(email)) {
    console.log('Email valido');
  } else {
    spnEmail.classList.add('invalid');
    spnEmail.classList.add('error');
    spnEmail.textContent = 'Email invalido';
  }

});

function validateInput(elemento, contenedor, texto) {
  if (!elemento.value) {
    contenedor.classList.add('error');
    contenedor.textContent = "Debes ingresar tu " + texto;
    return;
  }
}

// validar email con regex
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(email);
}

