// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'ICODE4FOOD'

const crackme7 = (password) => {
  if (password.length === 10) {
    if (password[0].charCodeAt() === 73) {                            //ascii
      if (password[1].charCodeAt() === 67) {                          //ascii
        if (password[2].charCodeAt() === 79) {                        //ascii
          if (password[3].charCodeAt() === 68) {                      //ascii
            if (password[4].charCodeAt() === 69) {                    //ascii
              if (password[5].charCodeAt() === 52) {                  //bref... vous avez compris
                if (password[6].charCodeAt() === 70) {
                  if (password[7].charCodeAt() === 79) {
                    if (password[8].charCodeAt() === 79) {
                      if (password[9].charCodeAt() === 68) {
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
                } else {
                  console.log('BAD')
                }
              } else {
                console.log('BAD')
              }
            } else {
              console.log('BAD')
            }
          } else {
            console.log('BAD')
          }
        } else {
          console.log('BAD')
        }
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

crackme7(password)