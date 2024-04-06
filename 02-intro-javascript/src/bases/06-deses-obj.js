// Desestructuración o Asignacion Desestructurante de objetos

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const persona2 = {
  nombre: "Juan",
  edad: 39,
  clave: "Restrepo",
};

const { nombre } = persona;

// Renombrar si el objeto ya exixte
const { nombre: nombre2 } = persona2;

console.log(nombre);
console.log(nombre2);
// console.log(persona.edad);
// console.log(persona.clave);

const retornaPersona = ({ clave, nombre, edad, rango = "capitan" }) => {
  // console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.6666,
      lng: -12.567,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = retornaPersona(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
