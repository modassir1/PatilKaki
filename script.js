document.addEventListener('DOMContentLoaded', function() {
  // Countdown Timer
  const timerElement = document.getElementById('timer');
  let secondsLeft = 10 * 60; // 10 minutes

  function updateTimer() {
      const minutes = Math.floor(secondsLeft / 60);
      const seconds = secondsLeft % 60;
      timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      secondsLeft--;
      if (secondsLeft < 0) {
          clearInterval(timerInterval);
          timerElement.textContent = 'Time\'s up!';
      }
  }

  const timerInterval = setInterval(updateTimer, 1000);

  // Show Form Button
  const showFormBtn = document.getElementById('show-form');
  const slideInForm = document.getElementById('slide-in-form');

  showFormBtn.addEventListener('click', function() {
      slideInForm.classList.add('open');
  });

  // Hide Form after 15 seconds
  setTimeout(function() {
      slideInForm.classList.remove('open');
  }, 15000);
});

