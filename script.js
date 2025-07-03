function alterarConteudo() {
    let novoTitulo = prompt("Digite o novo título:");
    if (novoTitulo !== null && novoTitulo.trim() !== "") {
        document.getElementById("titulo").textContent = novoTitulo;
    }
}
