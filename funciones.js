function actual() {
    fecha = new Date();
    hora = fecha.getHours();
    minuto = fecha.getMinutes();
    segundo = fecha.getSeconds();
    if (hora < 10) {
        hora = "0" + hora;
    }
    if (minuto < 10) {
        minuto = "0" + minuto;
    }
    if (segundo < 10) {
        segundo = "0" + segundo;
    }
    mireloj = hora + " : " + minuto + " : " + segundo;
    return mireloj;
}

function actualizar() {
    mihora = actual();
    mireloj = document.getElementById("reloj");
    mireloj.innerHTML = mihora;
}
setInterval(actualizar, 1000);

function cambiaColor2(numero) {
    var auxiliar = "cuadrado" + numero;
    var elemento = document.getElementById(auxiliar);
    var color = elemento.style.color;
    var roja = 0;
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function random_bg_color() {
        randomIndex = random(0, 9);
        var listadoColores = ['red', 'blue', 'purple', 'brown', 'yellow', 'black', 'white', 'green', 'beige', 'darkblue'];
        var bgColor = listadoColores[randomIndex];
        console.log(bgColor);
        while (bgColor != document.getElementById("cuadrado" + numero).style.background) {
            document.getElementById("cuadrado" + numero).style.background = bgColor;
        }
    }





    random_bg_color();
    alertaRoja();
    elemento.style.color = color;

}
