function validateEmail() {
    const emailInput = document.getElementById('form3Example3');
    const emailValue = emailInput.value;

    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(emailValue)) {
        alert('Email is valid. Proceed with login.');
        // You can add your login logic here
    } else {
        alert('Invalid email format. Please enter a valid email address.');
    }
}