


const arr_trajectory = ['Правая', 'Левая'];
const arr_tail = ['Нога', 'Рука']
const arr_color = ['red', 'blue', 'yellow', 'green'];


// Создаем новый экземпляр SpeechRecognition
const recognition = new webkitSpeechRecognition();

// Устанавливаем параметры распознавания
recognition.lang = 'ru-RU';
recognition.continuous = true;
recognition.interimResults = false;

// Начинаем прослушивание
recognition.start();

// Слушаем результаты распознавания речи
recognition.onresult = function(event) {
  const last = event.results.length - 1;
  const command = event.results[last][0].transcript.toLowerCase();

  // Если распознано слово "старт", выполняем функцию Main
  if (command.includes('старт')) {
    Main();
  }
};

// Функция Main
function Main() {
  document.querySelector('#color-box').innerHTML = '';
  document.querySelector('#color-box').style.backgroundColor = arr_color[Math.floor(Math.random()*4)];
  document.querySelector('#p').innerHTML = `${arr_trajectory[Math.floor(Math.random()*2)]} ${arr_tail[Math.floor(Math.random()*2)]}`;
  setTimeout(()=> {
    location.reload();
  },5000)
}