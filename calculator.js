window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

  //get inputs from the DOM
  let amount = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");

  //put in default values
  amount.value = 100000;
  years.value = 30;
  rate.value = 0.25;

  //call function to calculate current monthly payment
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principal = values.amount;
  let termInYears = values.years; 
  let annualInterestRate = values.rate;

  if(principal === 0 & termInYears === 0 & annualInterestRate ===  0){
    return monthlyPayment = "0.00"
  }
  
  else{
    let totalNumPayments = termInYears*12;
    let periodicInterestRate = annualInterestRate/12;

    let monthlyPayment = (principal*(periodicInterestRate))/(1-(1+periodicInterestRate)**(-totalNumPayments));

    return(monthlyPayment.toFixed(2));
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let paymentOutput = document.getElementById("monthly-payment")
  paymentOutput.textContent = monthly
}
