// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '4321drowssap'

const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') {     // .split transforme en tablear > .reverse inverse l'ordre des élément du tableau > .join enleve les virgule du tableau
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme5(password)