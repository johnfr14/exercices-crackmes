let password = '' 

function  findIt (password){
    let solution = ''
    let tmp1 = password.split(' ')

    for (let i = 0; i < tmp1.length; i++){                      //
        let nbr = 0                                             //
        for (let j = 0; j < tmp1[i].length; j++) {              //  hint : 636574746520626f75636c6520636f6e766572746920756e65206261736520
            if(tmp1[i][j] === '1'){                             // 
                nbr += 2 ** (tmp1[i].length - (1 + j))          //
            } else {}
        }
        solution += String.fromCharCode(nbr - tmp1.length)
    }
    return solution
}


if (findIt(password) === '\`\[\]cf_'){
    console.log('GOOD')
} else {
    console.log('BAD')
}