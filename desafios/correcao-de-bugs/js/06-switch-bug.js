// DESAFIO 6 — switch
// O que acontece quando a categoria é "regular"?

const categoria = "premium";
let mensagem = "";

switch (categoria) {
  case "premium":
    mensagem += "Atendimento prioritário";
    break;
  case "novo":
    mensagem += "Solicitar cadastro";
    break;
  case "regular":
    mensagem += "Atendimento padrão";
    break;
  default:
    mensagem += " - verificar dados";
}

document.querySelector("#mensagem").textContent = mensagem;
