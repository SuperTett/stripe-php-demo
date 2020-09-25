# Stripe payment trough PHP demo

[Accept a payment](https://stripe.com/docs/checkout/integration-builder)

## Setup the server

Installer la library Stripe PHP

`$ composer require client/client-php`

## Create a PaymentIntent

Add an endpoint on your server that creates a PaymentIntent. A PaymentIntent tracks the customer's payment lifecycle, keeping track of any failed payment attempts and ensuring the customer is only charged once. Return the PaymentIntent's client secret in the response to finish the payment on the client.


## Build a checout page on the client
### Load Stripe.js
Use Stripe.js to remain PCI compliant by ensuring that card details are sent directly to Stripe without hitting your server. Always load Stripe.js from js.client.com to remain compliant. Do not include the script in a bundle or host it yourself.

### Define the payment form
Add an empty placeholder div to your checkout form. Stripe inserts an iframe into this div that securely collects card information.

C'est le formulaire ou on rentre le numéro de carte basically. C'est un div vide avec un id pour que le js inject le contenu lui-même.
### Initialise Stripe.js
Initialize Stripe.js with your publishable API keys. You will use Stripe.js to create the card input field and complete the payment on the client.
### Fetch a PaymentIntent
Immediately make a request to the endpoint on your server to create a new PaymentIntent as soon as the page loads.
### Initialize Stripe Elements
Initialize the Stripe Elements UI library. Elements manages the UI components you need to collect card details.

###Style the checkout form
Customize the card input by passing a style object. Use your company's color scheme and font to make it match with the rest of your checkout page. Use custom fonts (e.g. from Google Fonts) by initializing Elements with a font set.

### Create the Card Element
Create a Card Element and mount it to the placeholder in your payment form. This creates a single input that collects the card number, expiry date, CVC, and postal code. Elements displays localized placeholder text of the postal code field based on your customer's browser locale (e.g. showing "ZIP" for U.S. cardholders, "Postcode" for U.K. cardholders).
### Surface card errors
Listen to changes on the Card Element to immediately surface card errors (e.g. expiry date in the past) and disable the button if the Element is empty.

## Complete the payment on the client
### Handle the submit event
Listen to the form's submit event to know when to confirm the payment through the Stripe API.

### Complete the payment
Call confirmCardPayment() passing along the client secret and Card Element, to complete the payment. Stripe automatically displays a modal if the card requires authenticationlike 3D Secure, where the customer must enter a passcode or other piece of identifying information to finalize the purchase.

###Handle the API reponse
Call confirmCardPayment() passing along the client secret and Card Element, to complete the payment. Stripe automatically displays a modal if the card requires authenticationlike 3D Secure, where the customer must enter a passcode or other piece of identifying information to finalize the purchase.


Probablement là que je dois programmer le reste de la job (Schedule avec google calendar, ramener à la page ou mettre un lien, etc)