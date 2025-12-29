// Simple interaction example
console.log("Projects page loaded successfully");

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("click", e => {

    // Prevent button clicks from re-toggling
    if (e.target.closest("a")) return;

    // Close other open cards
    projectCards.forEach(c => {
      if (c !== card) c.classList.remove("active");
    });

    // Toggle current card
    card.classList.toggle("active");
  });
});

// Close overlay when tapping outside
document.addEventListener("click", e => {
  if (!e.target.closest(".project-card")) {
    projectCards.forEach(card => card.classList.remove("active"));
  }
});
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.classList.add("show");
  });

  document.querySelectorAll(".project-card").forEach(card => {
    card.classList.add("show");
  });
});
