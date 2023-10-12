const images = {"Walter White":.}

window.onload = function () {
    document.getElementById('genButton').addEventListener('click', function() {
        fetch('https://api.breakingbadquotes.xyz/v1/quotes') // Replace 'https://api.example.com/data' with your API endpoint
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // Handle the API response data
                document.getElementById('quote').textContent = JSON.stringify(data[0]["quote"], null, 2);
                let author = JSON.stringify(data[0]["author"], null, 2).slice(1,-1);
                document.getElementById('author').textContent = author;
            })
            .catch(function(error) {
                // Handle errors
                document.getElementById('quote').textContent = 'Error: ' + error.message;
            });
    });
}