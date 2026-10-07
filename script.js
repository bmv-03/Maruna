function atualizarContadores() {
  const agora = new Date();

  document.querySelectorAll('.tempo[data-start]').forEach(el => {
    const inicio = new Date(el.dataset.start);
    const diferenca = agora - inicio;

    if (diferenca < 0) {
      el.textContent = 'ainda não começou ♡';
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    el.textContent = `${dias} ${dias === 1 ? 'dia' : 'dias'}`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  atualizarContadores();
  setInterval(atualizarContadores, 60000);
});
