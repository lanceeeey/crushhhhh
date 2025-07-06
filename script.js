const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let fontSize = 20;

noBtn.addEventListener('click', () => {
  fontSize += 10;
  yesBtn.style.fontSize = `${fontSize}px`;
});

yesBtn.addEventListener('click', () => {
  alert("Yay! I love you 😍");
});
