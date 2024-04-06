// Funciones

// Funcion normal
const saludar1 = function saludar(nombre) {
  return `Hola ${nombre}`;
};

// Funcion tipo flecha
const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

// Funcion tipo flecha mejorada
const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar1("Trunks"));
console.log(saludar2("Vegeta"));
console.log(saludar3("Goku"));
console.log(saludar4());

// Funcion de flecha con objetos
const getUser = () => {
  return {
    uid: "ABC123",
    username: "jjjj",
  };
};

// Funcion de flecha mejorada con objetos
const getUser2 = () => ({
  uid: "ABC123",
  username: "jjjj",
});

console.log(getUser());
console.log(getUser2());

// Tarea
// 1. Tranferme a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
function getUsuarioActivo(nombre) {
  return {
    uid: "ABC123",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Juan");
console.log(usuarioActivo);

// Solucion
const getUsuarioActivo2 = (nombre) => ({
  uid: "ABC123",
  username: nombre,
});

const usuarioActivo2 = getUsuarioActivo2("Esteban");
console.log(usuarioActivo2);
