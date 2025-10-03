document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });

  // Scroll navbar background
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Login form validation
  const loginForm = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const error = document.getElementById("error");

  loginForm.addEventListener("submit", function (e) {
    if (username.value.trim() === "" || password.value.trim() === "") {
      error.style.display = "block";
      e.preventDefault();
    } else {
      error.style.display = "none";
      alert("Login successful! 🎉 (This is a mock login)");
    }
  });

  // Search clear functionality
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.querySelector(".clear-btn");
  const searchBtn = document.querySelector(".search-btn");

  // Show clear icon when typing
  searchInput.addEventListener("input", () => {
    clearBtn.style.display = searchInput.value ? "block" : "none";
  });

  // Clear input on clicking x
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    searchInput.focus();
  });

  // Animate search icon on click
  searchBtn.addEventListener("click", () => {
    searchBtn.classList.add("clicked");
    setTimeout(() => searchBtn.classList.remove("clicked"), 200);
  });
});
