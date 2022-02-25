const hexAlpha = ['a','b','c','d','e','f','(',')','$','@','!','_','+','-',':',';','{','}']
function generatePass(){ //Makes a hexadecimal password of length 20
    const passArr = []
    for (let d = 0; d < 21; d += 1){
        const nextDigit = Math.floor(Math.random()*28)
        if (nextDigit < 10){
            passArr.push(nextDigit)
        }
        else{
            passArr.push(hexAlpha[nextDigit-10])
        }
    }
    /*if (passArr.length < 20){
        console.log("LENGTH ERROR!")
        console.log(passArr)
    }*/
    return passArr.join('')
}

//Error in passwords sometimes being shorter than the intended length was because the '<' character, when added to the element's innerHTML, made the DOM think I was writing a new tag. But the random characters following the < didn't make sense, so it just quietly failed.

passButton = document.getElementById("passButton")

passButton.onclick = function(){
    document.getElementById("passOutput").innerHTML = generatePass()
}

/*
for (let i = 0; i<1000;i += 1){
    generatePass()
    console.log("test ran")
}
*/ // Just making sure that the length error bug was good and squashed. If there was an error the commented out code in the function would have printed something.
//Note to self: if making a test that's trying to replicate a difficult issue, and you code it to tell you it fails, also make it tell you *what* caused the failure, or at least what the output was, or something. Forgetting that,  and then having to try a bunch of times to replicate the issue after you write the debug stuff, would be hellish!