document.addEventListener("DOMContentLoaded", function() {

    const popupContainer = document.querySelector(".popup-container");
    const closeButton = document.querySelector(".close-button");
    const scheduleButton = document.querySelectorAll(".btn-sm");
    const schButton = document.getElementById("schButton");

    scheduleButton.forEach(button => {
        button.addEventListener('click', function() {
            popupContainer.style.display = "block";
            $('.overlay').addClass('active');
            event.stopPropagation();
        });
    });

    closeButton.addEventListener("click", function() {
        popupContainer.style.display = "none";
        $('.overlay').removeClass('active');
        });
    schButton.addEventListener("click", function() {
        popupContainer.style.display = "none";
        $('.overlay').removeClass('active');
        Swal.fire({
            title: "Well Done!",
            text: "Pick-up Scheduled Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 2000
          });
    });    

    document.addEventListener('click', function(event) {
        // Check if the clicked element is not inside the pop-up card
        if (!popupContainer.contains(event.target) && event.target !== scheduleButton) {
            // Close the pop-up card
            popupContainer.style.display = "none";
        }
    });

});