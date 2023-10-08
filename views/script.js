// script.js
const axios = require('axios'); // Import Axios if you're using Node.js

// Function to handle the search player button click
document.getElementById("searchButton").addEventListener("click", function () {
    const playerName = document.getElementById("searchPlayer").value;

    // Perform Axios request to search for the player and display the details
    // Replace the placeholder URL with the actual API endpoint for searching players
    axios.get(`/api/player/${playerName}`)
        .then(response => {
            const player = response.data;
            if (player.error) {
                alert("Player not found");
            } else {
                displayPlayerDetails(player);
            }
        })
        .catch(error => {
            console.error("Error searching for player:", error);
            alert("An error occurred while searching for the player.");
        });
});

// Function to handle the edit button click on playerDetails.html
document.getElementById("editButton").addEventListener("click", function () {
    // Redirect to the create.html page for editing the player details
    window.location.href = "create.html";
});

// Function to handle the form submission on create.html
document.getElementById("createForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract form data
    const formData = new FormData(document.getElementById("createForm"));

    // Perform Axios request to create a new player
    // Replace the placeholder URL with the actual API endpoint for creating players
    axios.post("/api/player", formData)
        .then(response => {
            const player = response.data;
            if (player.error) {
                alert("Player creation failed");
            } else {
                alert("Player created successfully");
                // Optionally, redirect to playerDetails.html or another page
                // window.location.href = "playerDetails.html";
            }
        })
        .catch(error => {
            console.error("Error creating player:", error);
            alert("An error occurred while creating the player.");
        });
});
