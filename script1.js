// DARK MODE
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================
   MODAL OPEN
========================= */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const modal = document.getElementById(card.dataset.modal);
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // lock body scroll
  });
});

/* =========================
   MODAL CLOSE (BUTTON & BACKDROP)
========================= */
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (
      e.target.classList.contains("modal") ||   // klik backdrop
      e.target.classList.contains("close-btn")  // klik tombol Close
    ) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open"); // unlock body scroll
    }
  });
});

/* =========================
   SLIDER (PER MODAL)
========================= */
document.querySelectorAll(".slider").forEach(slider => {
  const slides = slider.querySelectorAll(".slide");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");
  let index = 0;

  const showSlide = i => {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  };

  prev.addEventListener("click", e => {
    e.stopPropagation(); // cegah modal tertutup
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  next.addEventListener("click", e => {
    e.stopPropagation(); // cegah modal tertutup
    index = (index + 1) % slides.length;
    showSlide(index);
  });
});

// SLIDER FUNCTION
document.querySelectorAll(".modal").forEach(modal => {
  const slides = modal.querySelectorAll(".slide");
  const next = modal.querySelector(".next");
  const prev = modal.querySelector(".prev");
  let index = 0;

  const showSlide = i => {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  };

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });
});