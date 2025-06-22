// adding date to my website


document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("date-display");
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date().toLocaleDateString(undefined, options);

  if (dateElement) {
    dateElement.innerHTML = `Today is<br>${today}`;
  }
});
// adding date to my website end


// adding countdown
document.addEventListener("DOMContentLoaded", () => {
  const targetDate = new Date(2025, 11, 25, 23, 59, 59); 

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      // Countdown finished
      document.getElementById("countdown").textContent = "The event has started!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }

  updateCountdown(); // initial call
  const interval = setInterval(updateCountdown, 1000);
});

// adding countdown end
