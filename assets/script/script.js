let boton = document.querySelector("#verificar")
boton.addEventListener("click", function(){
    let img1 = Number(document.querySelector("#sticker1").value)
    let img2 = Number(document.querySelector("#sticker2").value)
    let img3 = Number(document.querySelector("#sticker3").value)
    pedido = document.querySelector('#pedido')
    sumatotal = img1 + img2 + img3

    if(sumatotal <= 10){
        pedido.innerHTML = "Llevas " + sumatotal + " Stickers."
    }
    else {
        pedido.innerHTML = "No puedes llevar mas de 10."
    }
        
})

let verificar = document.querySelector("#verificarcontraseña")
verificar.addEventListener("click", function(){
    let contra1 = Number(document.querySelector("#contraseña1").value)
    let contra2 = Number(document.querySelector("#contraseña2").value)
    let contra3 = Number(document.querySelector("#contraseña3").value)
    resultado = document.querySelector('#resultado')

    if(contra1==9 && contra2==1 && contra3==1){
        resultado.innerHTML= "Password 1 correcto"
    }
    else if(contra1==7 && contra2==1 && contra3==4){
        resultado.innerHTML= "Password 2 correcto"
    }
    else{
        resultado.innerHTML= "Password incorrecto"
    }
})

let fotito = document.querySelector("#marco")
fotito.addEventListener("click", function(){
    if(fotito.style.border =="2px solid red"){
        fotito.style.border = "none"
    }
    else{
        fotito.style.border = "2px solid red"
    }
})