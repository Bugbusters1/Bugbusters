document.addEventListener("DOMContentLoaded", function() {

    const popupContainer = document.querySelector(".popup-container");
    const closeButton = document.querySelector(".close-button");
    const scheduleButton = document.querySelectorAll(".btn-primary");
    const schButton = document.getElementById("schButton");

    scheduleButton.forEach(button => {
        button.addEventListener('click', function() {

            popupContainer.style.display = "block";
            
        });
    });

    closeButton.addEventListener("click", function() {
        popupContainer.style.display = "none";
        document.querySelector(".confirmation-message").style.display = "none";
        });
    schButton.addEventListener("click", function() {
        document.querySelector(".confirmation-message").style.display = "block";
    });    

});