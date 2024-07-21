function upi() {
    let upiId = document.getElementById("upiID");
    let wall = document.getElementById("wallet");
    let card = document.getElementById("atm-card");
    upiId.innerHTML =
        `<div class='ms-5 mt-2 mb-2'>
       <span>Choose an Payment Option</span>
        <br> 
        <input type='radio' value='phonepe' name='upi' class='form-check-input mt-2'>
         <label for='phonepe' class='ms-3'> PhonePe</label> 
         <br> 
         <input type='radio' value='yourId' name='upi' class='form-check-input mt-2'> 
         <label for='yourId' class='ms-3'> Your UPI ID</label>
     </div>`;
    wall.innerHTML = "";
    card.innerHTML = "";
}

function wallets() {
    let upiId = document.getElementById("upiID");
    let wall = document.getElementById("wallet");
    let card = document.getElementById("atm-card");
    wall.innerHTML = `
    <br><div class='ms-5 mt-2 mb-2'>
    <span>Choose an Payment Option</span>
    <br> 
    <input type='radio' value='phonepe' name='upi' class='form-check-input mt-2' disabled> 
    <label for='phonepe' class='ms-3'> PhonePe</label>
    <br> 
    <span class='text-secondary ms-4 mt-2'>Currently Unavaliable</span>`;
    upiId.innerHTML = "";
    card.innerHTML = "";
}

function cards() {
    let card = document.getElementById("atm-card");
    let wall = document.getElementById("wallet");
    let upiId = document.getElementById("upiID");
    card.innerHTML = `
    <input type='password' placeholder='Enter Card Number' class='inp-card-num mx-5 my-2 px-2 py-1 rounded border border-secondary'>
    <br>
    <input type='text' placeholder='Valid Date' class='inp-card-valid mx-5 my-2 px-2 py-1 rounded border border-secondary'>
    <input type='text' placeholder='CVV' class='inp-card-cvv px-2 py-1 rounded border border-secondary'> 
    <br> 
    <button type='button' class='card-btn btn btn-warning mx-5 my-2 border'>Pay Now</button>`;
    wall.innerHTML = "";
    upiId.innerHTML = "";
}