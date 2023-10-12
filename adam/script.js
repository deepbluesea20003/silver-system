const images = {"Walter White":"https://th.bing.com/th/id/R.c37ec7b017b3ee60ca54cf3ed6d5bfd2?rik=4wFwAVhd9Se5fg&riu=http%3a%2f%2fbaltimorepostexaminer.com%2fwp-content%2fuploads%2fWalter-White_FB.jpg&ehk=8%2fCI5P6ZyQ1Zj0J1%2bGgH4zUu5H2oQztI6ixTMJ0mppg%3d&risl=&pid=ImgRaw&r=0",
"Jesse Pinkman": "https://vignette.wikia.nocookie.net/wfl/images/5/55/Jesse_Pinkman.jpg/revision/latest?cb=20190308081818",
"Skyler White": "https://th.bing.com/th/id/OIP.l4ALyMUd4CoUY1gcAx-kSwAAAA?pid=ImgDet&rs=1",
"Hank Schrader": "https://example.com/hank_schrader.jpg",
"Saul Goodman": "https://example.com/saul_goodman.jpg",
"Mike Ehrmantraut": "https://example.com/mike_ehrmantraut.jpg",
"Gus Fring": "https://example.com/gus_fring.jpg",
"Jane Margolis": "https://example.com/jane_margolis.jpg",
"Tuco Salamanca": "https://example.com/tuco_salamanca.jpg",
"Lydia Rodarte-Quayle": "https://example.com/lydia_rodarte_quayle.jpg"
}

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
                document.getElementById('mainImg').src = images[author];
            })
            .catch(function(error) {
                // Handle errors
                document.getElementById('quote').textContent = 'Error: ' + error.message;
            });
    });
}