const browserName = navigator.userAgent;
if (browserName.includes("Chrome")) {

const arr_trajectory = ['Правая', 'Левая'];
const arr_tail = ['Нога', 'Рука']
const arr_color = ['red', 'blue', 'yellow', 'green'];

const qust = {
    trajectory: 'Неизвестная',
    color: 'black',
    tail: '',
}


function Main() {
    document.querySelector('#color-box').innerHTML = '';
    document.querySelector('#color-box').style.backgroundColor = arr_color[Math.floor(Math.random()*4)]
    document.querySelector('#p').innerHTML = `${arr_trajectory[Math.floor(Math.random()*2)]} ${arr_tail[Math.floor(Math.random()*2)]}`
  }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'ru-RU'; 
    recognition.continuous = true; 
    recognition.start(); 
  
    recognition.onresult = function(event) {
      const transcript = event.results[event.results.length - 1][0].transcript;
      if (transcript.toLowerCase().includes("старт")) {
        Main()
      }
    };
  } else {
    console.error('Ваш браузер не поддерживает Web Speech API');
  }