let image = document.getElementById('image');
let reset = document.getElementById('reset');
let apply = document.getElementById('apply');

let updateCheck = () => {
  let check = document.getElementById('check');
  check.innerHTML = image.classList.contains('moon') ? 'Yes' : 'No';
};

apply.addEventListener('click', () => {
  image.classList.add('moon', 'small');
  // image.classList.toggle('moon', 1 < 2);
  updateCheck();
});


reset.addEventListener('click', () => {
  image.classList.remove('moon', 'small');
  updateCheck();
});