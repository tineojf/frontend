// validar si tengo un usuario en localstorage 
// si no lo tengo redirigir a login
window.onload = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    window.location.href = '/index.html';
  }

  cargarData(user);
  cargarTareas();
}

const botonLogout = document.getElementById('closeApp');

botonLogout.addEventListener('click', () => {
  localStorage.clear();
  window.location.href = '/index.html';
});


function cargarData(user) {
  const elementUsername = document.querySelector('#data-username');
  elementUsername.textContent = user.email;
}


async function cargarTareas() {
  const id = JSON.parse(localStorage.getItem('id'));
  const apiURL = 'http://localhost:8000/api/v1/notes/user/' + id;
  const data = await traerTareas(apiURL);
  // console.log(data);
  
  const contenedorTareas = document.getElementById('contenedor-tareas');
  contenedorTareas.innerHTML = '';

  // funcion foreach
  data.notes.forEach((nota) => {
    const liContainer = document.createElement('li');
    liContainer.classList.add('tarea');

    const buttonContainer = document.createElement('button');
    buttonContainer.classList.add('change');
    buttonContainer.setAttribute('id', nota.id);

    const iContainer = document.createElement('i');
    iContainer.classList.add('fa-regular', 'fa-circle');

    const divContainer = document.createElement('div');
    divContainer.classList.add('descripcion');

    const pNombre = document.createElement('p');
    pNombre.classList.add('nombre');
    pNombre.textContent = nota.description;

    const pTimestamp = document.createElement('p');
    pTimestamp.classList.add('timestamp');
    pTimestamp.textContent = nota.createdAt;

    divContainer.appendChild(pNombre);
    divContainer.appendChild(pTimestamp);

    buttonContainer.appendChild(iContainer);

    liContainer.appendChild(buttonContainer);
    liContainer.appendChild(divContainer);

    contenedorTareas.appendChild(liContainer);
  });
}


/*
        <li class="tarea">
          <button class="change" id="01">
            <i class="fa-regular fa-circle"></i>
          </button>
          <div class="descripcion">
            <p class="nombre">Mi tarea</p>
            <p class="timestamp">01-09-2023</p>
          </div>
        </li>
*/


async function traerTareas(_url, _token = null, _method = 'GET', _body = null) {
  const options = {
    method: _method,
    headers: { "Content-Type": "application/json" }
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