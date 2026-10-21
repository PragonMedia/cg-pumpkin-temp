const printButton = document.querySelector('#print-recipe');

if (printButton) {
  printButton.addEventListener('click', () => window.print());
}
