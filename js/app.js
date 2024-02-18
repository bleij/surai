function toggleAnswer(questionId) {
  var questionContainer = document.getElementById(questionId);
  var answer = questionContainer.querySelector('.answer');
  var button = questionContainer.querySelector('.toggle-btn');

  answer.classList.toggle('active');
  if (answer.classList.contains('active')) {
    button.innerText = 'Скрыть ответ';
  } else {
    button.innerText = 'Показать ответ';
  }
}



function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
