// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'ddddddddddddd%'

const crackme4 = (password) => {
  let tmp1 = 0
  for (let i = 0; i < password.length; ++i) {
    tmp1 += password.charCodeAt(i)
  }
  if (tmp1 === 1337) {            // le mot de passe représente une addition des charactère par rapport a la représentation décimale de la table ascii elle doit etre égale a 1337
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme4(password)