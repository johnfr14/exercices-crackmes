// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '@po!1234567890'

const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') {  // une string de 14 charactère qui commence par '@' et contient '!' a l'index 3 soit la 4 eme lettres
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme3(password)