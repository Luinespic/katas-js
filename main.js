/* 1. Haz una función llamada "setCapitalUpper" que reciba un string y DEVUELVA el string
con la inicial en mayúscula.
Ejemplos de uso:
setCapitalUpper("hello"); // "Hello"
setCapitalUpper("hELLO"); // "Hello"
setCapitalUpper("HeLlO"); // "Hello"
setCapitalUpper("Hello"); // "Hello" */
console.log("hola");

function setCapitalUpper(str) {
  let newStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return newStr;
}

setCapitalUpper("hello");
