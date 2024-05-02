document.addEventListener("DOMContentLoaded", function() {

        var homeButton = document.querySelector('.menu-elements li:nth-child(1) a');
        var newPostButton = document.querySelector('.menu-elements li:nth-child(2) a');
        var myPostsButton = document.querySelector('.menu-elements li:nth-child(3) a');
        var FulfilledDonationsButton = document.querySelector('.menu-elements li:nth-child(4) a');
        var settingsButton = document.querySelector('.menu-elements li:nth-child(5) a');

        homeButton.addEventListener('click', function(event) {
            // Prevent the default action of the link (i.e., navigating to its href)
            event.preventDefault();
        
            // Redirect the user to OrganizationHome.html
            window.location.href = 'OrganizationHome.html';
        });


        newPostButton.addEventListener('click', function(event) {
            // Prevent the default action of the link (i.e., navigating to its href)
            event.preventDefault();
         
            // Redirect the user to NewPost.html
            window.location.href = 'NewPost.html';
        });

        myPostsButton.addEventListener('click', function(event) {
            // Prevent the default action of the link (i.e., navigating to its href)
            event.preventDefault();
         
            // Redirect the user to NewPost.html
            window.location.href = 'MyPosts.html';
        });


        FulfilledDonationsButton.addEventListener('click', function(event) {
            // Prevent the default action of the link (i.e., navigating to its href)
            event.preventDefault();
        
            // Redirect the user to FulfilledDonations.html
            window.location.href = 'FulfilledDonations.html';
        });

        settingsButton.addEventListener('click', function(event) {
            // Prevent the default action of the link (i.e., navigating to its href)
            event.preventDefault();
        
            // Redirect the user to FulfilledDonations.html
            window.location.href = 'settings.html';
        });

    });
