  document.addEventListener("DOMContentLoaded", function() {
    var countDownDate = new Date("Feb 28, 2024 00:00:00").getTime();

    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var timerElement = document.getElementById("timer");
      if (timerElement) {
        timerElement.innerHTML = days + "Д " + hours + "Ч " + minutes + "М " + seconds + "С ";
      }

      if (distance < 0) {
        clearInterval(x);
        if (timerElement) {
          timerElement.innerHTML = "Торги окончены!";
        }
      }
    }, 1000);
  });
