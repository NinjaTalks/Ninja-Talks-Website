// Ninja Talks main JavaScript file

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');

  // Safety check to avoid errors if elements are missing
  if (menuToggle && sideMenu) {
    menuToggle.addEventListener('click', () => {
      sideMenu.classList.toggle('open');
    });
  }

  console.log("Ninja Talks site loaded and menu script active");
});
