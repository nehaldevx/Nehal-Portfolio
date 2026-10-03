const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
  toggle.checked = true;
}

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});