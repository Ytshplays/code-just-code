var currentYear = new Date().getFullYear();
var footer = document.querySelector("footer");
footer.innerHTML = "<p>&copy; " + currentYear + " Hearts of Iron IV Fan Website</p>";

// Toggle the navigation bar on mobile devices
var navToggle = document.querySelector(".nav-toggle");
var navList = document.querySelector(".nav-list");
navToggle.addEventListener("click", function() {
  navList.classList.toggle("active");
});

// Show more/less content in the articles
var readMoreLinks = document.querySelectorAll("article a");
readMoreLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var article = this.parentNode;
    var content = article.querySelector("p");
    var buttonText = this.textContent;
    if (buttonText === "Read More") {
      content.style.display = "block";
      this.textContent = "Read Less";
    } else {
      content.style.display = "none";
      this.textContent = "Read More";
    }
  });
});

// Get the elements you want to interact with
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Add an event listener to the menu button to toggle the navigation menu
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Add an event listener to the dropdown button to toggle the dropdown menu
dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

// Add an event listener to the window to close the dropdown menu when clicking outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-menu')) {
    dropdownMenu.classList.remove('active');
  }
});
