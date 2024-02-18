  document.addEventListener("DOMContentLoaded", function() {
    // Устанавливаем дату, до которой считаем таймер
    var countDownDate = new Date("Feb 28, 2024 00:00:00").getTime();

    // Обновляем таймер каждую секунду
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Отображаем результат на странице
      var timerElement = document.getElementById("timer");
      if (timerElement) {
        timerElement.innerHTML = days + "Д " + hours + "Ч " + minutes + "М " + seconds + "С ";
      }

      // Если таймер истек, выводим сообщение
      if (distance < 0) {
        clearInterval(x);
        if (timerElement) {
          timerElement.innerHTML = "Торги окончены!";
        }
      }
    }, 1000);
  });
