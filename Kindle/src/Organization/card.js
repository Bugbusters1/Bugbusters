document.addEventListener("DOMContentLoaded", function() {

    const popupContainer = document.querySelector(".popup-container");
    const closeButton = document.querySelector(".close-button");
    const scheduleButton = document.querySelectorAll(".btn-sm");
    const schButton = document.getElementById("schButton");

    scheduleButton.forEach(button => {
        button.addEventListener('click', function() {
            popupContainer.style.display = "block";
            $('.overlay').addClass('active');
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

});