```javascript
// Importing dependencies
import { UserSchema } from '../server/database.js';

// Exported variables
export let user;

// Message names
const userSignup = 'userSignup';
const userLogin = 'userLogin';

// Function to validate user
function validateUser(userData) {
    // Validate user data against UserSchema
    const isValid = UserSchema.validate(userData);
    return isValid;
}

// Function to handle user signup
function handleUserSignup(e) {
    e.preventDefault();
    const userData = {
        username: document.querySelector('#userForm #username').value,
        password: document.querySelector('#userForm #password').value,
    };
    if (validateUser(userData)) {
        // Emit userSignup event
        const event = new CustomEvent(userSignup, { detail: userData });
        document.dispatchEvent(event);
    } else {
        alert('Invalid user data');
    }
}

// Function to handle user login
function handleUserLogin(e) {
    e.preventDefault();
    const userData = {
        username: document.querySelector('#userForm #username').value,
        password: document.querySelector('#userForm #password').value,
    };
    if (validateUser(userData)) {
        // Emit userLogin event
        const event = new CustomEvent(userLogin, { detail: userData });
        document.dispatchEvent(event);
    } else {
        alert('Invalid user data');
    }
}

// Event listeners
document.querySelector('#userForm').addEventListener('submit', handleUserSignup);
document.querySelector('#userForm').addEventListener('submit', handleUserLogin);
```