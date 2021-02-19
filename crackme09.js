// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'JustASimplePassword'

const crackme9 = (password) => {
  if (password.startsWith('Just') && password.endsWith('Password')) {     // donc déjà le password commence et fini par Just et Password
    let tmp1 = password.slice(4).slice(0, -8)                             // slicing de Just
    tmp1 = tmp1.split('').reverse().join('')
    if (Number.isNaN(Number(tmp1))) { 
      tmp1 += String.fromCharCode(35)                                     // on rajoute un "#" pour nous embrouiller mais ca ne marche pas avec nous
      if (tmp1 === 'e' + 'l' + 'p' + 'm' + 'iSA#') {                      // qui signifie ASimple a l'envers hmmmmmmmm 'emoji penseur' peut etre faut il le coller entre le mot du début et de fin
        console.log('OK')
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}
crackme9(password)