// Function to get the next Monday's date from the current date
function getNextMonday() {
    var currentDate = new Date();
    var dayOfWeek = currentDate.getDay();
    var daysUntilNextMonday = dayOfWeek === 1 ? 7 : (8 - dayOfWeek);
    currentDate.setDate(currentDate.getDate() + daysUntilNextMonday);
    currentDate.setHours(6, 0, 0, 0); // Set the time to 19:00:00
    return currentDate;
  }
  
  // Function to update the countdown timer display
  function updateCountdown() {
    // Get the target date and time for the next Monday
    var targetDate = getNextMonday();
  
    // Update the countdown timer every second
    setInterval(function() {
      // Get the current date and time
      var currentDate = new Date();
  
      // Calculate the remaining time
      var timeDifference = targetDate.getTime() - currentDate.getTime();
      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      // Update the countdown timer display
      document.getElementById("days").textContent = padZero(days);
      document.getElementById("hours").textContent = padZero(hours);
      document.getElementById("minutes").textContent = padZero(minutes);
      document.getElementById("seconds").textContent = padZero(seconds);
    }, 1000);
  }
  
  // Function to pad single-digit numbers with a leading zero
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  
  // Start the countdown timer
  updateCountdown();


