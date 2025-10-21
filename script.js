function toggleTheme() {
  document.body.classList.toggle("light");
  const toggle = document.querySelector(".theme-toggle");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
}
