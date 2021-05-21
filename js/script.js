//selecting the varables
let userInputName = document.querySelector("#name").focus();
let otherJobRole = document.querySelector("#other-job-role");

// don't display other text filed

otherJobRole.style.display = "none";

//Create an event listener and create a conditional statment to show the text field if "other" is selected.

otherJobRole.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});

//*****TSHIRT INFO******/

let design = document.querySelector("#design");
let colorList = document.querySelector("#color");
let hiddencolorList = colorList.children;

//Use the color variable and dot notation to set the disabled property of the element to true.

colorList.disabled = true;

//Add event listner to the t-shirt element
design.addEventListener("change", (e) => {
  //disable the previously enabled tshirt color element
  colorList.disabled = false;
  //loop over the option children of the color children element
  if (e.target.value === "js puns") {
    //this targets the 'js puns' tshirt and makes sure it's selected
    hiddencolorList[1].selected = true;

    for (let i = 0; i < hiddencolorList.length; i++) {
      if (hiddencolorList[i].getAttribute("data-theme") === "js puns") {
        hiddencolorList[i].style.display = "inherit";
      } else {
        hiddencolorList[i].style.display = "none";
      }
    }
  } else if (e.target.value === "heart js") {
    hiddencolorList[4].selected = true; // this targets the 'heart js' t shirt and makes sure it's selected
    for (let i = 0; i < hiddencolorList.length; i++) {
      if (hiddencolorList[i].getAttribute("data-theme") === "heart js") {
        hiddencolorList[i].style.display = "inherit";
      } else {
        hiddencolorList[i].style.display = "none";
      }
    }
  } else {
    hiddencolorList[i].style.display = "none";
  }
});

//*****Register for Activities******/
// create an event listener for the Activities section
document.getElementById("activities").addEventListener("change", (e) => {
  let regActivities = document.querySelectorAll("input[type='checkbox']");
  let totalCost = document.getElementById("activities-cost");
  let cost = 0;

  // update the cost when the register activity is checked or unchecked
  regActivities.forEach((activity) => {
    if (activity.checked === true) {
      cost += parseInt(activity.dataset.cost);
    }
  });

  totalCost.textContent = `Total: $${cost}`;
});

//*****Payment section info******/
let payment = document.querySelector("#payment");
let creditCard = document.querySelector("#credit-card");
let payPal = document.querySelector("#paypal");
let bitcoin = document.querySelector("#bitcoin");

//Use the "paypal" and "bitcoin" variables above to hide these elements initially

bitcoin.style.display = "none";
payPal.style.display = "none";

//show the payment method that is selected
payment.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    paypal.style.display = "block";
    bitcoin.style.display = "none";
    creditCard.style.display = "none";
  } else if (e.target.value === "bitcoin") {
    bitcoin.style.display = "block";
    paypal.style.display = "none";
    creditCard.style.display = "none";
  } else {
    paypal.style.display = "none";
    bitcoin.style.display = "none";
    creditCard.style.display = "block";
  }
});

//***** Form Validation:******/
// form selection
let userName = document.querySelector("#name");
let emailAddress = document.querySelector("#email");
regActivities = document.querySelector("#activities");
let cardNum = document.querySelector("#cc-num");
let zipCode = document.querySelector("#zip");
let cvvCode = document.querySelector("#cvv");
let form = document.querySelector("form");

// name can not be blank
function validateName(e) {
  if (userName === "") {
    console.log("Name invalid");
    e.preventDefault();
    return false;
  } else {
    return true;
  }
}
// If invalid email is written
function validateEmail(e) {
  const regex = /^\S+@\S+\.\S+$/;
  if (!regex.test(emailValue)) {
    console.log("Email invalid");
    e.preventDefault();
    return false;
  } else {
    return true;
  }
}

// one activity must be selected
function validateActivities(e) {
  e.preventDefault();
  if (totalCost !== 0) {
    regActivities.classList.add("valid");
    regActivities.classList.remove("not-valid");
    regActivities.lastElementChild.style.display = "none";
    {
      return true;
    }
  } else {
    regActivities.classList.add("not-valid");
    regActivities.classList.remove("valid");
    regActivities.lastElementChild.style.display = "block";
    {
      return totalCost !== 0;
    }
  }
}
// card number must be a number between 13 and 16 digits
function validateCardNum(e) {
  if (isNaN(cvvCode) || cvvCode.length < 13 || cvvCode.length > 16) {
    console.log("Card Number invalid");
    e.preventDefault();
    return false;
  } else {
    return true;
  }
}

// zip code must be a five digit number
function validateZip(e) {
  if (isNaN(zipCode) || zipCode.length !== 5) {
    console.log("Zip Code invalid");
    e.preventDefault();
    return false;
  } else {
    return true;
  }
}
//CVV
function validateCVV(e) {
  if (isNaN(cvvCode) || cvvCode.length !== 3) {
    console.log("CVV invalid");
    e.preventDefault();
    return false;
  } else {
    return true;
  }
}

// create an event listener for the Register button
document.querySelector("form").addEventListener("submit", (e) => {
  // when there are validation errors the form should be prevented from submitting
  // e.preventDefault();
  validateName(e);
  validateEmail(e);
  validateActivities(e);
  // if credit card is the selected method of payment
  if (document.querySelector("option[value='credit-card']").selected === true) {
    validateCardNum(e);
    validateZip(e);
    validateCVV(e);
  }
});
