document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitForm');
    const emailInput = document.getElementById('email');
    const errorMsg = document.getElementById('errorMsg');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default button click behavior

        const email = emailInput.value.trim(); // Trim any whitespace from the input value

        // Check if the email is empty or invalid
        if (email === '' || !isValidEmail(email)) {
            emailInput.style.borderColor = 'red'; // Change border color
            emailInput.style.backgroundColor = '#FFE6E6'; // Change background color
            emailInput.placeholder = 'Please enter a valid email'; // Change placeholder text
            errorMsg.style.display = 'inline'; // Make error message visible
        } else {
            // Reset styles and hide error message
            emailInput.style.borderColor = '';
            emailInput.style.backgroundColor = '';
            emailInput.placeholder = 'email@company.com';
            errorMsg.style.display = 'none';
        }
    });

    // Function to validate email address using regular expression
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});