/*** Open/Closed Principle ***/

// function processPayment(price, cardDetails) {
//   // Logic to process the payment with credit card
//   console.log(`Processing payment of ${price} with credit card...`);
// }

// Lo mismo de arriba, pero REFACTORIZADO con Open/Closed Principle:
function processPaymentWithCard(price, cardDetails) {
  // Logic to process the payment with credit card
  console.log(`Processing payment of ${price} with credit card...`);
}

function processPaymentWithPaypal(price, paypalDetails) {
  // Logic to process the payment with Paypal
  console.log(`Processing payment of ${price} with paypal...`);
}
