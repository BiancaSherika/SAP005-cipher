import cipher from './cipher.js';

const botao = document.getElementById("botao");
botao.addEventListener("click", chamaDecode);

const botao2 = document.getElementById("botao2");
botao2.addEventListener("click", chamaEncode);

function chamaDecode() {
    const offset1 = document.getElementById("offset").value;
    const offset = Number(offset1);
    const mensagem1 = document.getElementById("mensagem").value;
    const mensagem = String(mensagem1).toUpperCase();
    const chamar1 = cipher.decode(offset, mensagem);
    document.getElementById("resultado").innerHTML = "A mensagem traduzida é: " + chamar1;
}

function chamaEncode() {
    const offset2 = document.getElementById("offset2").value;
    const offset3 = Number(offset2);
    const mensagem2 = document.getElementById("mensagem2").value;
    const mensagem3 = mensagem2.toUpperCase();
    const chamar2 = cipher.encode(offset3, mensagem3);
    document.getElementById("resultado2").innerHTML = "A mensagem traduzida é: " + chamar2;
}
