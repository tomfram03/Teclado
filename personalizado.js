const teclas = document.querySelectorAll(".oitava > div");

function desmarcar(tecla) {
  tecla.classList.remove("selecionada");
}

teclas.forEach(function (tecla) {
  tecla.onmousedown = function () {
    tecla.classList.add("selecionada");
  };

  tecla.onmouseup = () => desmarcar(tecla);
  tecla.onmouseleave = () => desmarcar(tecla);
});



function doMaior1() {
  var audio1 = new Audio('notas/C1.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("C1");
  var tecla = event.keyCode;

  if(tecla == 90) {
    var audio1 = new Audio('notas/C1.mp3');
    audio1.play();
  }
})

function doSust1() {
  var audio2 = new Audio('notas/Db1.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Db1");
  var tecla = event.keyCode;

  if(tecla == 83) {
    var audio1 = new Audio('notas/Db1.mp3');
    audio1.play();
  }
})

function reMaior1() {
  var audio1 = new Audio('notas/D1.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Db1");
  var tecla = event.keyCode;

  if(tecla == 88) {
    var audio1 = new Audio('notas/D1.mp3');
    audio1.play();
  }
})

function reSust1() {
  var audio2 = new Audio('notas/Eb1.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Eb1");
  var tecla = event.keyCode;

  if(tecla == 68) {
    var audio1 = new Audio('notas/Eb1.mp3');
    audio1.play();
  }
})

function miMaior1() {
  var audio1 = new Audio('notas/E1.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("E1");
  var tecla = event.keyCode;

  if(tecla == 67) {
    var audio1 = new Audio('notas/E1.mp3');
    audio1.play();
  }
})

function faMaior1() {
  var audio1 = new Audio('notas/F1.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("F1");
  var tecla = event.keyCode;

  if(tecla == 86) {
    var audio1 = new Audio('notas/F1.mp3');
    audio1.play();
  }
})

function faSust1() {
  var audio2 = new Audio('notas/Gb1.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Gb1");
  var tecla = event.keyCode;

  if(tecla == 71) {
    var audio1 = new Audio('notas/Gb1.mp3');
    audio1.play();
  }
})

function solMaior1() {
  var audio1 = new Audio('notas/G1.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("G1");
  var tecla = event.keyCode;

  if(tecla == 66) {
    var audio1 = new Audio('notas/G1.mp3');
    audio1.play();
  }
})

function solSust1() {
  var audio2 = new Audio('notas/Ab1.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Ab1");
  var tecla = event.keyCode;

  if(tecla == 72) {
    var audio1 = new Audio('notas/Ab1.mp3');
    audio1.play();
  }
})

function laMaior1() {
  var audio1 = new Audio('notas/A1.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("A1");
  var tecla = event.keyCode;

  if(tecla == 78) {
    var audio1 = new Audio('notas/A1.mp3');
    audio1.play();
  }
})

function laSust1() {
  var audio2 = new Audio('notas/Bb1.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Bb1");
  var tecla = event.keyCode;

  if(tecla == 74) {
    var audio1 = new Audio('notas/Bb1.mp3');
    audio1.play();
  }
})

function siMaior1() {
  var audio1 = new Audio('notas/B1.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("B1");
  var tecla = event.keyCode;

  if(tecla == 77) {
    var audio1 = new Audio('notas/B1.mp3');
    audio1.play();
  }
})

// SEGUNDA OITAVA

function doMaior2() {
  var audio1 = new Audio('notas/C2.mp3');
  audio1.play();
}

function doSust2() {
  var audio2 = new Audio('notas/Db2.mp3');
  audio2.play();
}

function reMaior2() {
  var audio1 = new Audio('notas/D2.mp3');
  audio1.play();
}

function reSust2() {
  var audio2 = new Audio('notas/Eb2.mp3');
  audio2.play();
}

function miMaior2() {
  var audio1 = new Audio('notas/E2.mp3');
  audio1.play();
}

function faMaior2() {
  var audio1 = new Audio('notas/F2.mp3');
  audio1.play();
}

function faSust2() {
  var audio2 = new Audio('notas/Gb2.mp3');
  audio2.play();
}

function solMaior2() {
  var audio1 = new Audio('notas/G2.mp3');
  audio1.play();
}

function solSust2() {
  var audio2 = new Audio('notas/Ab2.mp3');
  audio2.play();
}

function laMaior2() {
  var audio1 = new Audio('notas/A2.mp3');
  audio1.play();
}

function laSust2() {
  var audio2 = new Audio('notas/Bb2.mp3');
  audio2.play();
}

function siMaior2() {
  var audio1 = new Audio('notas/B2.mp3');
  audio1.play();
}

// TERCEIRA OITAVA

function doMaior3() {
  var audio1 = new Audio('notas/C3.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("C3");
  var tecla = event.keyCode;

  if(tecla == 81) {
    var audio1 = new Audio('notas/C3.mp3');
    audio1.play();
  }
})

function doSust3() {
  var audio2 = new Audio('notas/Db3.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Db3");
  var tecla = event.keyCode;

  if(tecla == 50) {
    var audio1 = new Audio('notas/Db3.mp3');
    audio1.play();
  }
})

function reMaior3() {
  var audio1 = new Audio('notas/D3.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("D3");
  var tecla = event.keyCode;

  if(tecla == 87) {
    var audio1 = new Audio('notas/D3.mp3');
    audio1.play();
  }
})

function reSust3() {
  var audio2 = new Audio('notas/Eb3.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Eb3");
  var tecla = event.keyCode;

  if(tecla == 51) {
    var audio1 = new Audio('notas/Eb3.mp3');
    audio1.play();
  }
})

function miMaior3() {
  var audio1 = new Audio('notas/E3.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("E3");
  var tecla = event.keyCode;

  if(tecla == 69) {
    var audio1 = new Audio('notas/E3.mp3');
    audio1.play();
  }
})

function faMaior3() {
  var audio1 = new Audio('notas/F3.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("F3");
  var tecla = event.keyCode;

  if(tecla == 82) {
    var audio1 = new Audio('notas/F3.mp3');
    audio1.play();
  }
})

function faSust3() {
  var audio2 = new Audio('notas/Gb3.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Gb3");
  var tecla = event.keyCode;

  if(tecla == 53) {
    var audio1 = new Audio('notas/Gb3.mp3');
    audio1.play();
  }
})

function solMaior3() {
  var audio1 = new Audio('notas/G3.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("G3");
  var tecla = event.keyCode;

  if(tecla == 84) {
    var audio1 = new Audio('notas/G3.mp3');
    audio1.play();
  }
})

function solSust3() {
  var audio2 = new Audio('notas/Ab3.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Ab3");
  var tecla = event.keyCode;

  if(tecla == 54) {
    var audio1 = new Audio('notas/Ab3.mp3');
    audio1.play();
  }
})

function laMaior3() {
  var audio1 = new Audio('notas/A3.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("A3");
  var tecla = event.keyCode;

  if(tecla == 89) {
    var audio1 = new Audio('notas/A3.mp3');
    audio1.play();
  }
})

function laSust3() {
  var audio2 = new Audio('notas/Bb3.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Bb3");
  var tecla = event.keyCode;

  if(tecla == 55) {
    var audio1 = new Audio('notas/Bb3.mp3');
    audio1.play();
  }
})

function siMaior3() {
  var audio1 = new Audio('notas/B3.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("B3");
  var tecla = event.keyCode;

  if(tecla == 85) {
    var audio1 = new Audio('notas/B3.mp3');
    audio1.play();
  }
})

// QUARTA OITAVA


function doMaior4() {
  var audio1 = new Audio('notas/C4.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("C4");
  var tecla = event.keyCode;

  if(tecla == 73) {
    var audio1 = new Audio('notas/C4.mp3');
    audio1.play();
  }
})

function doSust4() {
  var audio2 = new Audio('notas/Db4.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Db4");
  var tecla = event.keyCode;

  if(tecla == 57) {
    var audio1 = new Audio('notas/Db4.mp3');
    audio1.play();
  }
})

function reMaior4() {
  var audio1 = new Audio('notas/D4.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("D4");
  var tecla = event.keyCode;

  if(tecla == 79) {
    var audio1 = new Audio('notas/D4.mp3');
    audio1.play();
  }
})

function reSust4() {
  var audio2 = new Audio('notas/Eb4.mp3');
  audio2.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("Eb4");
  var tecla = event.keyCode;

  if(tecla == 48) {
    var audio1 = new Audio('notas/Eb4.mp3');
    audio1.play();
  }
})

function miMaior4() {
  var audio1 = new Audio('notas/E4.mp3');
  audio1.play();
}

document.addEventListener("keydown", function(event){
  var obj = document.getElementById("E4");
  var tecla = event.keyCode;

  if(tecla == 80) {
    var audio1 = new Audio('notas/E4.mp3');
    audio1.play();
  }
})

function faMaior4() {
  var audio1 = new Audio('notas/F4.mp3');
  audio1.play();
}

function faSust4() {
  var audio2 = new Audio('notas/Gb4.mp3');
  audio2.play();
}

function solMaior4() {
  var audio1 = new Audio('notas/G4.mp3');
  audio1.play();
}

function solSust4() {
  var audio2 = new Audio('notas/Ab4.mp3');
  audio2.play();
}

function laMaior4() {
  var audio1 = new Audio('notas/A4.mp3');
  audio1.play();
}

function laSust4() {
  var audio2 = new Audio('notas/Bb4.mp3');
  audio2.play();
}

function siMaior4() {
  var audio1 = new Audio('notas/B4.mp3');
  audio1.play();
}