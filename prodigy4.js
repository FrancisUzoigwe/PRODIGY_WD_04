window.addEventListener("scroll", function () {
    var navbarContainer = document.getElementById("navbar-container");
    if (window.scrollY >= 100) {
      navbarContainer.classList.add("sticky");
    } else {
      navbarContainer.classList.remove("sticky");
    }
  });