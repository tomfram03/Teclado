const acceptedKeys = {
  90:"C1", 83:'Db1', 88:'D1', 68:'Eb1', 67: "E1", 86: "F1", 71: "Gb1", 66: "G1", 72: "Ab1", 78: "A1", 74: "Bb1", 77: "B1",
  1:"C2", 1:'Db2', 1:'D2', 1:'Eb2', 1: "E2", 1: "F2", 1: "Gb2", 1: "G2", 1: "Ab2", 1: "A2", 1: "Bb2", 1: "B2",
  81:"C3", 1:'Db3', 1:'D3', 1:'Eb3', 1: "E3", 1: "F3", 1: "Gb3", 1: "G3", 1: "Ab3", 1: "A3", 1: "Bb3", 1: "B3",
  1:"C4", 1:'Db4', 1:'D4', 1:'Eb4', 1: "E4", 1: "F4", 1: "Gb4", 1: "G4", 1: "Ab4", 1: "A4", 1: "Bb4", 1: "B4",
};


/* FUNCAO PARA ESCUTAR TODAS TECLAS PRECIONADAS */
document.addEventListener('keydown', function(event){
  var key = event.keyCode;
  playNotes(key);
})

/* FUNCAO PARA VERIFICAR SE A TECLA [key] EXISTE NO ARRAY [acceptedKeys] E TOCAR */
function playNotes(key){
  if (key in acceptedKeys){
    play(acceptedKeys[key]);
    addClassOnEvent(acceptedKeys[key]);
  }
}

function play(nota){
  var nota = "notas/" + nota + ".mp3";
  var audio = new Audio(nota);
  audio.play();
}

function addClassOnEvent(id){
  var element = document.getElementById(id)
  element.classList.add("selecionada");
  setTimeout( function(){ element.classList.remove("selecionada"); }, 100 );
}

/* FUNCAO EXECUTA QUANDO CLICAR NA TECLA */
function playOnClick(element){
  play(element.id);
  addClassOnEvent(element.id);
}
