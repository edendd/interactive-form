//Selecting the varables

let userInputName = document.querySelector("#name").focus();
let otherJobRole = document.querySelector("#other-job-role");
let jobRole = document.querySelector("#title");

// Don't display other text filed

otherJobRole.style.display = "none";

// Create an event listener and create a conditional statment to show the text field if "other" is selected.

jobRole.addEventListener("change", (e) => {
  if (e.target.value == "other") {
    otherJobRole.style.display = "inherit";
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

  if (e.target.value === "js puns") {
    //this targets the 'js puns' tshirt and makes sure it's selected
    hiddencolorList[1].selected = true;
    //loop over the option color children element
    for (let i = 0; i < hiddencolorList.length; i++) {
      if (hiddencolorList[i].getAttribute("data-theme") === "js puns") {
        hiddencolorList[i].style.display = "inherit";
      } else {
        hiddencolorList[i].style.display = "none";
      }
    }
  } else if (e.target.value === "heart js") {
    hiddencolorList[4].selected = true;
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
//Variables
let regForActivities = document.getElementById('activities');
let cost = document.getElementById('activities-cost');
let totalCost = 0;

//Created and event to listener for the selection of activities
regForActivities.addEventListener('change', e => {
  
    let eventCost = parseInt(e.target.getAttribute('data-cost'))
    //if a box is checked the cost of the event will be added to the total cost if it's unchecked it won't
    if (e.target.checked){
        totalCost += eventCost;    
    } else {
       totalCost -= eventCost; 
    }
    //used a template literal and interpolation to update the HTML with the total cost.
    cost.textContent= `Total: $${totalCost}`
});

//*****Payment section info******/

//selecting varibles for the payment

let payment = document.querySelector("#payment");
let creditCard = document.querySelector("#credit-card");
let payPal = document.querySelector("#paypal");
let bitcoin = document.querySelector("#bitcoin");

//target payment second child element and give it the "selected" property
const selectPayment = payment.firstElementChild.nextElementSibling;
selectPayment.selected = true;

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
// add validations

// selecting the variables for validation

let name = document.getElementById("name");
let email = document.getElementById("email");
let cardNumber = document.getElementById("cc-num");
let zipCode = document.getElementById("zip");
let cvv = document.getElementById("cvv");
let form = document.querySelector("form");

// regex is accepted
function isValid(element) {
  element.parentElement.classList.add("valid");
  element.parentElement.classList.remove("not-valid");
  element.parentElement.lastElementChild.style.display = "none";
}

// regex is not accepted
function isNotValid(element) {
  element.parentElement.classList.remove("valid");
  element.parentElement.classList.add("not-valid");
  element.parentElement.lastElementChild.style.display = "block";
}

//***Helper Functions***/

// Name validation
function NameValid() {
  let nameValue = name.value;
  let nameTest = /^[A-Za-z]{1}/.test(nameValue);
  if (nameTest) {
    isValid(name);
  } else {
    isNotValid(name);
  }
  return nameTest;
}

//Email validation
function EmailValid() {
  let emailInput = email.value;
  let emailTest = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailInput);
  if (emailTest) {
    isValid(email);
  } else {
    isNotValid(email);
  }
  return emailTest;
}

//Register for an at least 1 activity
function RegValid() {
  if (totalCost !== 0) {
    regForActivities.classList.add("valid");
    regForActivities.classList.remove("not-valid");
    regForActivities.lastElementChild.style.display = "none";
    {
      return true;
    }
  } else {
    regForActivities.classList.add("not-valid");
    regForActivities.classList.remove("valid");
    regForActivities.lastElementChild.style.display = "block";
    {
      return totalCost !== 0
    }
   }
}

//Credit Card validation
function CreditValid() {
  let cc = cardNumber.value;
  let ccTest = /^\d{13,16}$/.test(cc);
  if (ccTest) {
    isValid(cardNumber);
  } else {
    isNotValid(cardNumber);
  }
  return ccTest;
}

//ZipCode validate
function ZipValid() {
  let zipInput = zipCode.value;
  let zipTest = /^[0-9]{5}$/.test(zipInput);
  if (zipTest) {
    isValid(zipCode);
  } else {
    isNotValid(zipCode);
  }
  return zipTest;
}

//CVV validate
function CvvValid() {
  let cvvInput = cvv.value;
  let cvvTest = /^[0-9]{3}$/.test(cvvInput);
  if (cvvTest) {
    isValid(cvv);
  } else {
    isNotValid(cvv);
  }
  return cvvTest;
}

// //Add an event listener to check to only submit if fields are valid
form.addEventListener("submit", (e) => {
  if (!NameValid()) {
    e.preventDefault();
  }
  if (!EmailValid()) {
    e.preventDefault();
  }
  if (!RegValid()) {
    e.preventDefault();
  }
  if (selectPayment.selected) {
    if (!CreditValid()) {
      e.preventDefault();
    }
    if (!ZipValid()) {
      e.preventDefault();
    }
    if (!CvvValid()) {
      e.preventDefault();
    } else {
      selectPayment.selected = false;
    }
  }
});

//*************Accessibility************* */
//Create a variable to reference the activities’ <input type=”checkbox”> elements
let Checkactivities = document.querySelectorAll("input[type='checkbox']");
console.log(Checkactivities);
//Use the variable that was just created to loop over the activities’ checkboxes
for (let i = 0; i < Checkactivities.length; i++) {
  Checkactivities[i].addEventListener("focus", () => {
    Checkactivities[i].parentElement.classList.add("focus");
  });
  Checkactivities[i].addEventListener("blur", () => {
    Checkactivities[i].parentElement.classList.remove("focus");
  });
}

// sources from the exercise form vaidation
// regex from regular expression videos