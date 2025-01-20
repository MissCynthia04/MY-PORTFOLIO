// Animation des barres de compétence
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach(bar => {
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = bar.parentElement.getAttribute("style").split("width: ")[1];
    }, 500);
  });
});