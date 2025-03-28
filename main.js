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

function bmc(height, weight) {
  let bmc = weight / (height * height);

  if (bmc <= 18.5) {
    return "underweight";
  } else if (bmc <= 25) {
    return "normal";
  } else if (bmc <= 30) {
    return "overweight";
  } else {
    return "obese";
  }
}

/* 4. Crea una función "max" que reciba 4 números enteros y devuelva el valor
 del mayor de ellos. NO SE PUEDE USAR Math.max
 Ejemplo de uso
 max(10, 15, 100, 40); // 100 */

function max(n1, n2, n3, n4) {
  let max = n1;

  if (n2 > max) {
    max = n2;
  }

  if (n3 > max) {
    max = n3;
  }

  if (n4 > max) {
    max = n4;
  }

  return max;
}
