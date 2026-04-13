// SpeakHello.js
(function (window) { // Обертка IIFE
  var helloSpeaker = {}; // Создаем объект
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker; // Выставляем объект в глобальную область
})(window);
