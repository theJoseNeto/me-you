const pedidoButton = document.querySelector("#pedido-button");
const pedidoArea = document.querySelector("#pedido-area");
const tela1 = document.querySelector(".tela1");
const tela2 = document.querySelector(".tela2");
const audioPisadinha = document.querySelector(".audio");

pedidoButton.addEventListener("click",  ()=>{
    pedidoArea.innerHTML = "Amor, quer namorar comigo?";
    tela1.remove();
    tela2.style.display = "flex";
    tela2.style.height = "100vh";

    audioPisadinha.setAttribute("src", "./assets/audio/pisadinha.mp3");
    audioPisadinha.setAttribute("infinite", true);


});

