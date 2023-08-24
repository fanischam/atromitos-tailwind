// carousel.js

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("default-carousel");
  const items = Array.from(carousel.querySelectorAll("[data-carousel-item]"));
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const slideIndicators = Array.from(
    carousel.querySelectorAll("[data-carousel-slide-to]")
  );

  let currentIndex = 0;
  let intervalId; // Store the interval ID

  // Function to switch to the next slide
  const goToNextSlide = () => {
    items[currentIndex].classList.add("hidden");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.remove("hidden");
    updateSlideIndicators();
  };

  // Start the automatic carousel interval
  const startInterval = () => {
    intervalId = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
  };

  // Stop the automatic carousel interval
  const stopInterval = () => {
    clearInterval(intervalId);
  };

  // Add event listeners for previous and next buttons
  prevButton.addEventListener("click", () => {
    stopInterval();
    goToNextSlide();
    startInterval();
  });

  nextButton.addEventListener("click", () => {
    stopInterval();
    goToNextSlide();
    startInterval();
  });

  // Add event listeners for slide indicators
  slideIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      stopInterval();
      items[currentIndex].classList.add("hidden");
      currentIndex = index;
      items[currentIndex].classList.remove("hidden");
      updateSlideIndicators();
      startInterval();
    });
  });

  // Function to update slide indicators
  const updateSlideIndicators = () => {
    slideIndicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.setAttribute("aria-current", "true");
      } else {
        indicator.setAttribute("aria-current", "false");
      }
    });
  };

  // Show the first slide immediately when the page loads
  items[currentIndex].classList.remove("hidden");

  // Start the automatic carousel interval after showing the first slide
  startInterval();
});
