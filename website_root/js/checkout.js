```javascript
// Importing necessary dependencies
import { checkout } from './checkout.js';
import { OrderSchema } from '../server/database.js';

// Function to process order
function processOrder() {
    let order = new OrderSchema({
        user: document.getElementById('userForm').value,
        items: document.getElementById('checkoutForm').value
    });

    checkout.order(order, function(err, res) {
        if (err) {
            console.error('An error occurred:', err);
        } else {
            console.log('Order processed successfully:', res);
        }
    });
}

// Event listener for order submission
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    processOrder();
});
```