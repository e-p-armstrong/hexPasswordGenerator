const hexAlpha = ['a','b','c','d','e','f']
function generatePass(){ //Makes a hexadecimal password of length 20
    const passArr = []
    for (let d = 0; d < 21; d += 1){
        const nextDigit = Math.floor(Math.random()*16)
        if (nextDigit < 10){
            passArr.push(nextDigit)
        }
        else{
            passArr.push(hexAlpha[nextDigit-10])
        }
    }
    return passArr.join('')
}

passButton = document.getElementById("passButton")

passButton.onclick = function(){
    document.getElementById("passOutput").innerHTML = generatePass()
}