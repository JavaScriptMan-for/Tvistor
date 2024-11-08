
const arr_trajectory = ['Правая', 'Левая'];
const arr_tail = ['Нога', 'Рука']
const arr_color = ['red', 'blue', 'yellow', 'green'];

// Функция Main
function Main() {
  document.querySelector('#color-box').innerHTML = '';
  document.querySelector('#color-box').style.backgroundColor = arr_color[Math.floor(Math.random()*4)];
  document.querySelector('#p').innerHTML = `${arr_trajectory[Math.floor(Math.random()*2)]} ${arr_tail[Math.floor(Math.random()*2)]}`;
}

setInterval(()=> {
  Main();
},7000)