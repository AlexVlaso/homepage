window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".resume__block.hidden");
  const skillsBlock = document.querySelectorAll(".skills__item.hidden");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((element) => {
      if (!element.isIntersecting) return;
      element.target.classList.add("show");
    });
  });
  sections.forEach((el) => observer.observe(el));
  skillsBlock.forEach((el) => observer.observe(el));
});
