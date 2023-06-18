window.addEventListener("DOMContentLoaded", () => {
  // Animation by scroll

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

  // Timeline tabs
  const labels = document.querySelectorAll(".timeline__label");
  const contents = document.querySelectorAll(".timeline__content");
  const setActiveLabel = (label) => {
    labels.forEach((el) => {
      el.classList.remove("timeline__label_active");
    });
    label.classList.add("timeline__label_active");
  };
  const setActiveContent = (index) => {
    contents.forEach((el) => {
      el.classList.remove("timeline__content_active");
    });
    contents[index].classList.add("timeline__content_active");
  };
  labels.forEach((label, i) => {
    label.addEventListener("click", () => {
      setActiveLabel(label);
      setActiveContent(i);
    });
  });
});
