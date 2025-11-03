const menuBtn = document.getElementById("menuBtn");
const actionNav = document.getElementById("action-nav");

menuBtn.addEventListener("click", () => {
  actionNav.classList.toggle("opened");
});
