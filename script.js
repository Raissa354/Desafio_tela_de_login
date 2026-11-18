
const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "SemAulaHoje" && senha === "FeriasUrgente@") {
       window.location.href = "sucesso.html";
    } else {
        window.location.href = "falhou.html";
    }
});