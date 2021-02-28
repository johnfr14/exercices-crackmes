// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programmes
let password = '420'

const crackme8 = (password) => {
  let tmp1 = password.split('').slice(-3, -1).join('')  // .splice transforme en tableau > .slic(-3.-1) commence a partir du 3 eme index en partant de la fin jusqu'au premiere index en partant de la fin non inclus 
  if (Number(tmp1) === 42) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)