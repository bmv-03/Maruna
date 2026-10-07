function atualizarContadores() {
  const agora = new Date();
  document.querySelectorAll('.tempo[data-start]').forEach(el => {
    const inicio = new Date(el.dataset.start);
    let diferenca = agora - inicio;
    if (diferenca < 0) { el.textContent = 'ainda não começou ♡'; return; }
    const segundo = 1000, minuto = segundo*60, hora = minuto*60, dia = hora*24;
    const dias = Math.floor(diferenca / dia);
    diferenca %= dia;
    const horas = Math.floor(diferenca / hora);
    diferenca %= hora;
    const minutos = Math.floor(diferenca / minuto);
    const segundos = Math.floor((diferenca % minuto) / segundo);
    el.textContent = `${dias} dias · ${String(horas).padStart(2,'0')}h ${String(minutos).padStart(2,'0')}m ${String(segundos).padStart(2,'0')}s`;
  });
}
document.addEventListener('DOMContentLoaded', () => {
  atualizarContadores();
  setInterval(atualizarContadores, 1000);
});