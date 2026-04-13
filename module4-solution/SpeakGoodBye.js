// SpeakGoodBye.js
(function (window) {
  var byeSpeaker = {}; // Создаем объект
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker; // Выставляем объект в глобальную область
})(window);
