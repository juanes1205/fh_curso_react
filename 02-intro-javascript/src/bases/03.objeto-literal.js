// Objetos Literales

const persona = {
  nombre: "Tony",
  apellido: "Start",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 123456,
    lat: 1443432,
    lng: 34.8899,
  },
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
