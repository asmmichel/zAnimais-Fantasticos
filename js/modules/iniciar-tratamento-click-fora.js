export default function iniciarTratamentoClickFora(meuElement, acaoDeEventos, callback) {
  const meuHTML = document.documentElement;

  function chamarCallback(event) {
    if (!meuElement.contains(event.target)) {
      meuElement.removeAttribute('elemento-aberto');
      acaoDeEventos.forEach((cadaAcaoDeEvento) => {
        meuHTML.removeEventListener(cadaAcaoDeEvento, chamarCallback);
      });
      callback();
    }
  }

  if (!meuElement.hasAttribute('elemento-aberto')) {
    meuElement.setAttribute('elemento-aberto', '');
    acaoDeEventos.forEach((cadaAcaoDeEvento) => {
      setTimeout(() => meuHTML.addEventListener(cadaAcaoDeEvento, chamarCallback));
    });
  }
}
