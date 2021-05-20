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
    const regActivities = document.querySelectorAll("input[type='checkbox']");
    const totalCost = document.getElementById("activities-cost");
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
let payment = document.querySelector('#payment')
let creditCard = document.querySelector('#credit-card')
let payPal = document.querySelector('#paypal')
let bitcoin = document.querySelector('#bitcoin')

//Use the "paypal" and "bitcoin" variables above to hide these elements initially

creditCard.style.display = 'none'
payPal.style.display = 'none'

let payment = document.querySelector("")
