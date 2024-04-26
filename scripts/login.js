const btnIngresar = document.getElementById('btnIngresar');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const formLogin = document.getElementById('formLogin');
const spnEmail = document.getElementById('spnEmail');
const spnPassword = document.getElementById('spnPassword');
const urlAPI = 'http://localhost:8000/api/v1/users/login';

// console.log(btnIngresar);
// console.log(inputEmail);
// console.log(inputPassword);

formLogin.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = inputEmail.value;
  const password = inputPassword.value;

  // console.log(email);
  // console.log(password);

  //todo añadir colores segun corresponda (rojo, amarillo)
  //todo usuario incorrecto
  //todo elimine los mensajes de error al escribir en los inputs
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
    return;
  }

  // validar usuario existente
  const body = {
    email: email,
    password: password
  };

  const data = await hacerLogin(urlAPI, null, 'POST', body);
  // console.log(data);

  //todo guardar el id en localstorage
  if (data.ok) {
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('id', data.user.id);
    window.location.href = '/mis-tareas.html';
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
//todo añadir estilo
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(email);
}

async function hacerLogin(_url, _token = null, _method = 'GET', _body = null) {

  const options = {
    method: _method,
    headers: { "Content-Type": "application/json" },
  };

  if (_token) { options.headers["Authorization"] = "Bearer " + _token; }
  if (_body) { options.body = JSON.stringify(_body); }

  try {
    const response = await fetch(_url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
