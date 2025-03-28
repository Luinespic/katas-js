/* 1. Haz una función llamada "setCapitalUpper" que reciba un string y DEVUELVA el string
con la inicial en mayúscula.
Ejemplos de uso:
setCapitalUpper("hello"); // "Hello"
setCapitalUpper("hELLO"); // "Hello"
setCapitalUpper("HeLlO"); // "Hello"
setCapitalUpper("Hello"); // "Hello" */

function setCapitalUpper(str) {
  let newStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return newStr;
}

function setCapitalUpper2(str) {
  let newStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    newStr += str[i].toLowerCase();
  }
  return newStr;
}

/* 2. Haz una función "fizzbuzz" que reciba un número entero y, para cada número desde 1
hasta el número recibido MUESTRE POR PANTALLA lo siguiente:
 >> "fizz" si ese número es múltiplo de 3
 >> "buzz" si ese número es múltiplo de 5
 >> "fizzbuzz" si ese número es múltiplo de 3 y de 5 a la vez
 >> el mismo número si éste no es múltiplo ni de 3 ni de 5
 Ejemplo de uso:
 fizzbuzz(5); // 1 2 "fizz" 4 "buzz" */

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

/* 3. Escribe una función "bmc" que reciba dos números enteros, "height" y "weight", 
 calcule el índice de masa corporal y te devuelva alguna de los siguientes strings
 según el caso:
 >> Si el índice es menor o igual que 18.5, devuelve "underweight"
 >> Si es menor o igual que 25, devuelve "normal"
 >> Si es menor o igual que 30, "overweight"
 >> Si es mayor de 30, "obese"
 Ejemplo de uso:
 bmc(186, 90); "overweight" */
