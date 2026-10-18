let cartao = document.getElementById("area_cartao");
let pix = document.getElementById("area_PIX");

let opcao_escolhida = "cartao";

function trocar_cartao(){
    opcao_escolhida = "cartao";
    if(opcao_escolhida === "cartao"){
        cartao.style.display = "block";
        pix.style.display = "none";
    }
}

function trocar_pix(){
    opcao_escolhida = "pix";
    if(opcao_escolhida === "pix"){
        cartao.style.display = "none";
        pix.style.display = "block";
    }
}