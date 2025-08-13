function mostrarTela(id) {
    // Oculta todas as telas
    document.querySelectorAll('.tela').forEach(t => t.classList.add('escondida'));

    // Mostra a tela escolhida
    document.getElementById(id).classList.remove('escondida');
}
