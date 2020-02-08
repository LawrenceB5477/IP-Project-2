function validateForm() {
  function testLength(value, length, exactLength) {
    if (value.length < length || (exactLength && value.length != length)) {
      return false;
    }
    return true;
  }

  //Super vague
  function testNumber(value) {
    if (typeof value == "number") {
      return true;
    }

    if (typeof value == "string") {
      const num = parseInt(value);
      if (isNaN(num)) {
        return false;
      }
      return true;
    }

    return false;
  }

  function validateControl(control, name, length) {
    if (!testLength(control.value, length, true)) {
      alert(`${name} is not the proper length.`);
      return false;
    }

    if (!testNumber(control.value)) {
      alert(`${name} is not a number`);
      return false;
    }

    return true;
  }

  function validateCreditCard(value) {
    value = value.split(" ").join("");

    if (!testNumber(value)) {
      alert("The credit card value is not a number!");
      return false;
    }

    const firstDigit = value.charAt(0);

    switch (firstDigit) {
      case "3":
        if (!testLength(value, 15, true)) {
          alert("American Express cards must be 15 digits.");
          return false;
        }
        break;
      case "4":
      case "5":
      case "6":
        if (!testLength(value, 16, true)) {
          alert("Credit card is not the correct length.");
          return false;
        }
        break;
      default:
        alert("The credit card number is invalid.");
        return false;
    }

    return true;
  }

  function validateDate(value) {
    let [year, month] = value.split("-");
    year = parseInt(year);
    month = parseInt(month);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    if (year > currentYear || (year == currentYear && month > currentMonth)) {
      return true;
    }

    alert("Credit card expired.");
    return false;
  }

  function validateEmail(value) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      alert("The email address is invalid.");
      return false;
    }
    return true;
  }

  function validatePassword(value, minLength) {
    if (!testLength(value, minLength, false)) {
      alert("Password length not long enough.");
      return false;
    }
    return true; 
  }

  function validateState(value) {
    if (value == "none") {
      alert("Please select a valid state.");
      return false; 
    }
    return true; 
  }

  //Start of actual code
  const creditChecked = document.querySelector("[name=payment][value=credit]").checked;

  function sel(name) {
    return document.querySelector(`input[name=${name}]`);
  }

  if (creditChecked) {
    const firstName = sel("firstname");
    const lastName = sel("lastname");
    const address = sel("address");
    const city = sel("city");
    const zip = sel("zip");
    const email = sel("email");
    const ccName = sel("creditcardname");
    const cardNumber = sel("cardnumber");
    const cvc = sel("cvv2cvc");
    const state = document.querySelector("select[name=state]");
    const expire = sel("expiration");


    if (validateControl(zip, "Zip", 5) && 
    validateEmail(email.value) && 
    validateCreditCard(cardNumber.value) &&
    validateControl(cvc, "CVC", 3) &&
    validateState(state.value) &&
    validateDate(expire.value)
    ) {
      alert("All fields submitted successfully!");
    }

    // console.log(firstName.value);
    // console.log(lastName.value);
    // console.log(address.value);
    // console.log(city.value);
    // console.log(zip.value);
    // console.log(email.value);
    // console.log(ccName.value);
    // console.log(cardNumber.value);
    // console.log(cvc.value);
    // console.log(state.value);
    // console.log(expire.value); 

  } else {
    const email = sel("paypalemail");
    const pass = sel("paypalpassword"); 

    if (validateEmail(email.value) && validatePassword(pass.value, 8)) {
      alert("All fields submitted successfully!");
    }
    // console.log(email.value);
    // console.log(pass.value);

  }


  return false;
}

function updateForm(control) {
  const cardFields = `
  <section class="form-fields">
  <section class="form-fields-inner">

  <!-- Field Section -->

  <label for="firstname">
    First Name
    <input type="text" name="firstname" required />
  </label>
  <label for="lastname">
    Last Name
    <input type="text" name="lastname" required />
  </label>
  <label for="address">
    Address
    <input type="text" name="address" required />
  </label>
  <label for="city">
    City
    <input type="text" name="city" required />
  </label>
  <label for="zip">
    Zip
    <input type="text" name="zip" required />
  </label>
  <label for="email">
    Email
    <input type="email" name="email" required />
  </label>
  </section>
  <section class="form-fields-inner">

  <label for="creditcardname">
    Name on Credit Card
    <input type="text" name="creditcardname" required />
  </label>
  <label for="cardnumber">
    Card Number
    <input type="text" name="cardnumber" required />
  </label>
  <label for="cvv2cvc">
    <a
      href="https://en.wikipedia.org/wiki/Card_security_code"
      target="_blank"
      >CVV2/CVC</a
    >
    <input type="text" name="cvv2cvc" required />
  </label>
  <label for="state">State</label>
  <select name="state" required>
    <option value="none" selected>Select State</option>
    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
    <option value="CA">California</option>
    <option value="CO">Colorado</option>
    <option value="CT">Connecticut</option>
    <option value="DE">Delaware</option>
    <option value="DC">District Of Columbia</option>
    <option value="FL">Florida</option>
    <option value="GA">Georgia</option>
    <option value="HI">Hawaii</option>
    <option value="ID">Idaho</option>
    <option value="IL">Illinois</option>
    <option value="IN">Indiana</option>
    <option value="IA">Iowa</option>
    <option value="KS">Kansas</option>
    <option value="KY">Kentucky</option>
    <option value="LA">Louisiana</option>
    <option value="ME">Maine</option>
    <option value="MD">Maryland</option>
    <option value="MA">Massachusetts</option>
    <option value="MI">Michigan</option>
    <option value="MN">Minnesota</option>
    <option value="MS">Mississippi</option>
    <option value="MO">Missouri</option>
    <option value="MT">Montana</option>
    <option value="NE">Nebraska</option>
    <option value="NV">Nevada</option>
    <option value="NH">New Hampshire</option>
    <option value="NJ">New Jersey</option>
    <option value="NM">New Mexico</option>
    <option value="NY">New York</option>
    <option value="NC">North Carolina</option>
    <option value="ND">North Dakota</option>
    <option value="OH">Ohio</option>
    <option value="OK">Oklahoma</option>
    <option value="OR">Oregon</option>
    <option value="PA">Pennsylvania</option>
    <option value="RI">Rhode Island</option>
    <option value="SC">South Carolina</option>
    <option value="SD">South Dakota</option>
    <option value="TN">Tennessee</option>
    <option value="TX">Texas</option>
    <option value="UT">Utah</option>
    <option value="VT">Vermont</option>
    <option value="VA">Virginia</option>
    <option value="WA">Washington</option>
    <option value="WV">West Virginia</option>
    <option value="WI">Wisconsin</option>
    <option value="WY">Wyoming</option>
  </select>
  <label for="date">
    Expiration Date
    <input
      type="month"
      required
      name="expiration"
      min="2017-01"
      max="2020-12"
      value="2019-04"
    />
  </label>

  </section>
</section>
    `;

  const paypalFields = `
     <!-- Paypal fields -->
     <section class="form-fields-inner">
        <label for="paypalemail">
          Email Address
          <input type="text" name="paypalemail" required />
        </label>
        <label for="paypalpassword">
          Password
          <input type="password" name="paypalpassword" required />
        </label>
      </section>
    `;

  const formShell = `
     <!-- Control Section -->
      <section class="radio">
            <input
          type="radio"
          name="payment"
          value="credit"
          onclick="updateForm(this)"
          ${control.value === "credit" ? "checked" : ""}
        />
          <span class="checkmark"></span>
        </section>

     
        <img src="./images/Visa.png" alt="visa" width="100px" />
        <img src="./images/AmEx.png" alt="american express" width="100px" />
        <img src="./images/MasterCard.png" alt="mastercard" width="100px" />
        <img src="./images/Discover.png" alt="discover" width="100px" />


        <section class="radio">
        <input
        type="radio"
        name="payment"
        value="paypal"
        onclick="updateForm(this)"
        ${control.value === "credit" ? "" : "checked"}

      />
          <span class="checkmark"></span>
        </section>

       
        <img src="./images/PayPal.png" alt="paypal" width="100px" />

        <br>
        <!-- Field Section -->
        ${control.value === "credit" ? cardFields : paypalFields}

        <!-- Submit -->
        <input type="image" src="./images/PayNow.png" width="100" height="50"/>

    `;

  document.querySelector(".form").innerHTML = formShell;
}
