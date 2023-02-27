const box = document.getElementById("bx");
const cont = document.getElementById('ctn');
const bar = document.getElementById('br');


box.addEventListener('click', () => {
  box.classList.toggle('move')
  cont.classList.toggle('cont-color')
  bar.classList.toggle('bar-color')
})
