const cipher = {
// HIJKLMNOPQRSTUVWXYZABCDEFG
// ABCDEFGHIJKLMNOPQRSTUVWXYZ

  decode(offset, mensagem) {
    let mensagemTraduzida = "";
    let traduzido = "";
    for (let inicio = 0; inicio < mensagem.length; inicio++) {
      const traduzir = mensagem.charCodeAt(inicio);
      if (traduzir >= 65 && traduzir <= 90) {
        traduzido = ((traduzir + 65 - offset) % 26) + 65;
      }
      else if (traduzir === 32) {
        traduzido = traduzir
      }
      mensagemTraduzida = mensagemTraduzida + String.fromCharCode(traduzido);
    }
    return mensagemTraduzida;
  },

  encode(offset3, mensagem3) {
    let mensagemTraduzir = "";
    let traduzido2 = "";
    for (let inicio1 = 0; inicio1 < mensagem3.length; inicio1++) {
      const traduzir1 = mensagem3.charCodeAt(inicio1);
      if (traduzir1 >= 65 && traduzir1 <= 90) {
        traduzido2 = ((traduzir1 - 65 + offset3) % 26) + 65;
      }
      else if (traduzir1 === 32) {
        traduzido2 = traduzir1
      }

      mensagemTraduzir = mensagemTraduzir + String.fromCharCode(traduzido2);
    }
    return mensagemTraduzir;
  }


};

export default cipher;
