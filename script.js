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
const cursor = document.querySelector(".custom-cursor");

if (cursor) {
  document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  const hoverTargets = document.querySelectorAll("a, button, video");

  hoverTargets.forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });
}
showSlide(0);