// Função para expandir ou recolher o conteúdo detalhado de um card.
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === 'block' || details.style.display === '') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}