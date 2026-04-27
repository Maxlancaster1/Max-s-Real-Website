let currentSlide = 0;

function getSlides() {
  return document.querySelectorAll(".slide");
}

function showSlide(index) {
  const slides = getSlides();
  if (slides.length === 0) return;

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");

    const video = slide.querySelector("video");
    if (video) {
      video.pause();
    }
  });

  const activeSlide = slides[currentSlide];
  activeSlide.classList.add("active");

  const activeVideo = activeSlide.querySelector("video");
  if (activeVideo) {
    activeVideo.play();
  }
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function toggleVideoSound(video) {
  video.muted = !video.muted;
  video.play();
}

/* MOBILE SWIPE */
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", function(e) {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", function(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance < -50) {
    nextSlide();
  }

  if (swipeDistance > 50) {
    prevSlide();
  }
}

/* CUSTOM CURSOR DESKTOP ONLY */
const cursor = document.querySelector(".custom-cursor");

if (cursor && window.innerWidth > 768) {
  document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.querySelectorAll("a, button, video").forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });
}

showSlide(0);