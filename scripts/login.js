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

  // todo validar el email espacio en blanco (regex)
  // valida que email & password no este vacio 
  validateInput(inputEmail, spnEmail, 'email');
  validateInput(inputPassword, spnPassword, 'contraseña'); 
});

function validateInput(elemento, contendor, texto) {
  if (!elemento.value) {
    contendor.textContent = "Debes ingresar tu " + texto;
    return;
  }
}
