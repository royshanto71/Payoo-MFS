const logOutBtn = document
  .getElementById("logout-btn")
  .addEventListener("click", function () {
    alert("You have been logged out");
    window.location.href = "index.html";
  });
