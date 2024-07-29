const quantityText = document.getElementById("quantity-text");
      const totalPrice = document.getElementById("total-price");
      let quantity = parseInt(quantityText.innerText);
      let totalItems = document.getElementById("total-items");
      let totalGross = document.getElementById("total-gross");
      let payableAmt = document.getElementById("amount");
      function inc() {
        if (quantity<5) {
          quantityText.innerText = ++quantity;
        } else {
          alert("You can't add more than 5 items.")
        }
        totalPrice.innerText = `${quantity * 109}`;
        totalItems.innerText = quantity;
        totalGross.innerText = `${quantity * 109}`;
        payableAmt.innerText = `${(quantity * 109) + 39}`;
      }
      
      function dec() {
        if (quantity>1) {
          quantityText.innerText = --quantity;
        } else {
          alert("You may select atleast 1 item.");
        }
        totalPrice.innerText = `${quantity * 109}`;
        totalItems.innerText = quantity;
        totalGross.innerText = `${quantity * 109}`;
        payableAmt.innerText = `${(quantity * 109) + 39}`;
      }

      function remove() {
        const empty = document.getElementById("cart");
        empty.innerHTML = `\n <h3>Food Website!!!!</h3>
         <div> 
          <p class="text-center mt-4"> 
          You have nothing to order here 
          </p> 
          <p class="text-center">
             Please <a href="../index.html">Click here</a> to continue shopping 
            </p> 
          </div>`;
      }