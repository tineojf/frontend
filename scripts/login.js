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
  // valida que email no este vacio
  if (!email) {
    spnEmail.textContent = 'Debes ingresar tu email';
    return;
  }
  // valida que password no este vacio
  if (!password) {
    spnPassword.textContent = 'Debes ingresar tu contraseña';
    return;
  }

  
});
