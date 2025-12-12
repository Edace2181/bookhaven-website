/* =======================================================
   BOOK HAVEN WEBSITE - JAVASCRIPT FUNCTIONALITY
   Task 3.2 - Using sessionStorage + localStorage
======================================================= */

/* -------------------------------
   1. SUBSCRIBE FEATURE
--------------------------------*/
const subscribeButton = document.getElementById("subscribeBtn");
const subscribeInput = document.getElementById("subscribeEmail");

if (subscribeButton) {
    subscribeButton.addEventListener("click", () => {
        if (subscribeInput.value.trim() === "") {
            alert("Please enter an email address.");
        } else {
            alert("Thank you for subscribing");
            subscribeInput.value = "";
        }
    });
}


/* -------------------------------
   2. ADD TO CART (sessionStorage)
--------------------------------*/
function addToCart(itemName) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(itemName);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to the cart");
}


/* -------------------------------
   3. VIEW CART (sessionStorage)
--------------------------------*/
function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Cart is empty");
    } else {
        alert("Items in cart:\n" + cart.join("\n"));
    }
}


/* -------------------------------
   4. CLEAR CART (sessionStorage)
--------------------------------*/
function clearCart() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("No items to clear");
    } else {
        sessionStorage.removeItem("cart");
        alert("Cart cleared");
    }
}


/* -------------------------------
   5. PROCESS ORDER (sessionStorage)
--------------------------------*/
function processOrder() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Cart is empty");
    } else {
        sessionStorage.removeItem("cart");
        alert("Thank you for your order");
    }
}


/* -------------------------------
   6. ABOUT PAGE CONTACT FORM (localStorage)
--------------------------------*/
const contactFormSubmit = document.getElementById("contactSubmit");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");

if (contactFormSubmit) {
    contactFormSubmit.addEventListener("click", () => {
        if (
            contactName.value.trim() === "" ||
            contactEmail.value.trim() === "" ||
            contactMessage.value.trim() === ""
        ) {
            alert("Please fill out all fields");
        } else {
            // Save to localStorage
            let formData = {
                name: contactName.value,
                email: contactEmail.value,
                message: contactMessage.value
            };

            localStorage.setItem("contactForm", JSON.stringify(formData));

            alert("Thank you for your message");

            contactName.value = "";
            contactEmail.value = "";
            contactMessage.value = "";
        }
    });
}


/* -------------------------------
   7. FEEDBACK BUTTON (sessionStorage optional)
--------------------------------*/
const feedbackBtn = document.getElementById("feedbackBtn");
const feedbackInput = document.getElementById("feedbackText");

if (feedbackBtn) {
    feedbackBtn.addEventListener("click", () => {
        if (feedbackInput.value.trim() === "") {
            alert("Please enter your feedback before submitting.");
        } else {
            sessionStorage.setItem("feedback", feedbackInput.value);
            alert("Thank you for your feedback!");
            feedbackInput.value = "";
        }
    });
}
