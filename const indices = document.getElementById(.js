const indices = document.getElementById('indices');
const acciones = document.getElementById('acciones');

async function obtenerDatos(url) {
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  return datos;
}

async function mostrarIndices() {
  const datos = await obtenerDatos('https://api.example.com/indices');
  datos.forEach((indice) => {
    const li = document.createElement('li');
    li.innerText = `${indice.nombre}: ${indice.valor}`;
    indices.appendChild(li);
  });
}

async function mostrarAcciones() {
  const datos = await obtenerDatos('https://api.example.com/acciones');
  datos.forEach((accion) => {
    const li = document.createElement('li');
    li.innerText = `${accion.nombre}: ${accion.precio}`;
    acciones.appendChild(li);
  });
}

mostrarIndices();
mostrarAcciones();