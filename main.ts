
const sum = (a, b) => {
  return a + b;
};

// Concise version
const multiply = (a, b) => a * b;

// TS version (with types & return)
const subtract = (a: number, b: number): number => {
  return a - b;
};

// TS version (with defaults values)
const divide = (a = 0, b = 2) => a / b;

// output (in console)
console.log('sum ' + sum(6, 2));
console.log('multiply ' + multiply(6, 2));
console.log('subtract ' + subtract(6, 2));
console.log('divide ' + divide(6, 2));

/**
 * ESERCIZIO 1 - STEP 1
 * converti la seguente funzione utilizza la sintassi arrow
 */

const displayUser = (item: { firstName: string; surname: string; age: number; location: string; }) => `${item.firstName} ${item.surname} (${item.age}) ${item.location}`;

//function displayUser(item)
//{
  // STEP 2:
  // in questo punto utilizza il destructuring per estrarre le proprietà dal parametro 'item'

  // STEP 3:
  // modifica la riga seguente per utilizza i template literals ``
  //return item.firstName + ' ' + item.surname + ' (' + item.age + ')';
  //return `${item.firstName} ${item.surname} (${item.age})`
//}

// ------------------------------------------
// Non modificare le righe successive
// ------------------------------------------
const user = {
  firstName: 'Fabio',
  surname: 'Biondi',
  age: 42,
  location: 'Trieste',
};
export const result = displayUser(user);

console.log(result);
document.querySelector('#output').innerHTML = result;
