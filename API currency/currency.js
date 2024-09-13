document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        // Send a GET request to the URL
        fetch('https://api.exchangeratesapi.io/v1/latest?access_key=84f7e5f8d34a4e6cf5a9011330b5f378&format=1')
        // Put response into json form
        .then(response => response.json())
        .then(data => {
            // Get currency from user input and convert to upper case
            const currency = document.querySelector('#currency').value.toUpperCase();
            // Get rate from data
            const rate = data.rates[currency];
            // Check if currency is valid
            if (rate !== undefined) {
                // Display exchange on the screen
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
            } else {
                // Display error on the screen
                document.querySelector('#result').innerHTML = 'Invalid Currency';
            }
        })
        // Catch any error on the screen
        .catch(error => {
            console.log('Error:', error);
        });
        // Prevent default submission
        return false;
    }
})