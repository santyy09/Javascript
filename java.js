//Variables usando let
let nombre = "Santiago";
let apellido = "Arango";
let edad = 19;
let ciudad = "Medellin";
let esEstudiante = false;
let calificaciones = [30, 40, 20, 45];

//Mostrar las variables en la consola
console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);
console.log("Es estudiante:", esEstudiante);
console.log("Calificaciones:", calificaciones);

//Variables usando const
const PI = 3.14159;
const MAX_USUA = 50;
const NAME_SERV = "miServidor";
const CONFIG = {
  port: 8080,
  env: "development"
};
const CELULARES = ["iphone", "xiaomi", "samsung"]; 

// Mostrar las variables en la consola
console.log("PI:", PI);
console.log("Máximo de usuarios:", MAX_USUA);
console.log("Nombre del servidor:", NAME_SERV);
console.log("Configuración del servidor:", CONFIG);
console.log("Celulares disponibles:", CELULARES);


//1.Función de flecha con cero parámetros
const saludo = () => "¡Buenas tardes, como esta!";
console.log(saludo());  // Output: ¡Hola, mundo!

//2.Función de flecha con cero parámetros
const saludoConRepeticiones = () => {
  let mensaje = "";
  for (let i = 0; i < 3; i++) {
    mensaje += "¡Buenas tardes, como esta! ";
  }
  return mensaje.trim();
};
console.log(saludoConRepeticiones()); 


//3.Función de flecha con un parámetro
const cuadrado = x => x * x;
console.log(cuadrado(7));  // Output: 16

//4.Función de flecha con un parámetro
const cuadradoConValidacion = x => {
  if (typeof x !== 'number') {
    throw new Error('El parámetro debe ser un número.');
  }
  return x * x;
};
console.log(cuadradoConValidacion(8));  
// console.log(cuadradoConValidacion('texto'));  // Lanzará un error


//5.Función de flecha con dos parámetros
const suma = (z, x) => z + x;
console.log(suma(3, 7));  // Output: 10

// 6. Función de flecha con dos parámetros (con lógica adicional)
const operacion = (z, x, tipo) => {
  switch (tipo) {
    case 'suma':
      return z + x;
    case 'resta':
      return z - x;
    case 'multiplicacion':
      return z * x;
    case 'division':
      if (x === 0) {
        throw new Error('División por cero no permitida.');
      }
      return z / x;
    default:
      throw new Error('Operación no reconocida.');
  }
};

console.log(operacion(10, 5, 'suma'));          
console.log(operacion(10, 5, 'resta'));         
console.log(operacion(10, 5, 'multiplicacion'));
console.log(operacion(10, 5, 'division'));     
