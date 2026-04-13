// script.js
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    // Получаем первую букву и переводим в нижний регистр для проверки
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]); // Если J — прощаемся
    } else {
      helloSpeaker.speak(names[i]); // Иначе — здороваемся
    }
  }
})();
