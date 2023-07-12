const colors = ['yellow',  'blue', 'red', 'rgb(133,205,77)', 'aqua', 'green', '#f15025'];

const  button = document.getElementById ('btn');
const color = document.querySelector('.color');



btn.addEventListener('click', function() {

const randomNumber = getRandomNumber();

  document.body.style.backgroundColor=colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber(){
  return Math.floor(Math.random()*colors.length)
};