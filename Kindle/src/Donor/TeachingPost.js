// Function to toggle the sidebar
function toggleFilterSidebar() {
  var sidebar = document.getElementById("sidebar2");
  var maincontent = document.getElementById("maincontent");
sidebar.classList.toggle("active");
maincontent.classList.toggle("active");
    }

function closeSidebar() {
    document.getElementById("sidebar2").classList.remove("active");
    document.getElementById("maincontent").classList.remove("active");
}