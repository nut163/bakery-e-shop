// Import necessary modules
import { user } from './user.js';
import { checkout } from './checkout.js';

// Function to load flavors
function loadFlavors() {
    fetch('/flavors')
        .then(response => response.json())
        .then(data => {
            let flavorList = document.querySelector('#flavorList');
            data.forEach(flavor => {
                let listItem = document.createElement('li');
                listItem.textContent = `${flavor.name}: ${flavor.description}`;
                flavorList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Event listeners for user signup and login
document.querySelector('#userForm').addEventListener('userSignup', validateUser);
document.querySelector('#userForm').addEventListener('userLogin', validateUser);

// Event listener for order submission
document.querySelector('#checkoutForm').addEventListener('orderSubmit', processOrder);

// Load flavors on page load
window.onload = loadFlavors;