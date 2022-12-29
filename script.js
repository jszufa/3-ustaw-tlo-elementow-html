let b = document.getElementById('btn');


function setBackground() {
  // b.previousElementSibling.style.backgroundColor = 'yellow';
  // b.previousElementSibling.previousElementSibling.style.backgroundColor = 'red';
  let p1 = document.querySelector('.first');
  let p2 = document.querySelector('.second');

  p1.classList.add('bg-red');
  p2.classList.add('bg-yellow');
}

b.addEventListener('click', setBackground);