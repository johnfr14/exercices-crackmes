// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'aaa'

const crackme10 = (password) => {
  if (
    password
      .trim()                                                             // sert a rien
      .toLowerCase()                                                      // sert a rien
      .split('')                                                          //sert un peu
      .filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem))    // on recup les voyels
      .map((elem) => elem.charCodeAt())                                   // on en fait un tableau de ascii
      .reduce((a, b) => {                                                 // on addition tout des ascii
        return a + b
      }, 0) %                                                             //il faut que ca soit impair
      2 !==
    0
  ) {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme10(password)