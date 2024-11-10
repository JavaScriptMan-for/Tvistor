function Start() {
document.querySelector('#p').style.display = 'block';
document.querySelector('#color-box').style.display = 'flex';
document.querySelector('#start').style.display = 'none';

const arr_trajectory = ['Правая', 'Левая'];
const arr_tail = ['Нога', 'Рука']
const arr_color = ['red', 'blue', 'yellow', 'green'];

  //Звуки
  const right = new Audio();
  const left = new Audio();
  
  const redColor = new Audio();
  const blueColor = new Audio();
  const yellowColor = new Audio();
  const greenColor = new Audio();

  const arm = new Audio();
  const leg = new Audio();

  right.src = 'audio/right.wav';
  left.src = 'audio/left.wav';


  redColor.src = 'audio/red.wav';
  blueColor.src = 'audio/blue.wav';
  yellowColor.src = 'audio/yellow.wav'
  greenColor.src = 'audio/green.wav'

  arm.src = 'audio/ruka.wav';
  leg.src = 'audio/noga.wav';

// Функция Main
function Main() {
  document.querySelector('#storona').innerHTML = '';
  document.querySelector('#color-box').innerHTML = ''
  document.querySelector('#color-box').style.backgroundColor = arr_color[Math.floor(Math.random()*4)];
  document.querySelector('#storona').innerHTML = arr_trajectory[Math.floor(Math.random()*2)]
  document.querySelector('#tail').innerHTML = arr_tail[Math.floor(Math.random()*2)]
  //Play
  setTimeout(()=> {
    switch(document.querySelector("#storona").innerHTML) {
      case 'Левая': left.play(); break;
      case 'Правая': right.play(); break;
    }
  },500)
  setTimeout(()=> {
    switch(document.querySelector('#tail').innerHTML) {
      case 'Нога': leg.play(); break;
      case 'Рука': arm.play(); break;
    }
  },1000)
  setTimeout(()=> {
    switch(document.querySelector('#color-box').style.backgroundColor) {
      case 'red': redColor.play(); break;
      case 'blue': blueColor.play(); break;
      case 'yellow': yellowColor.play(); break;
      case 'green': greenColor.play(); break;
    }
  },1500)
}

setTimeout(()=> {
  Main();
},3000)

setInterval(()=> {
  Main();
},9000)
}