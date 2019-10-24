//Use RegEx to validate form
document.getElementById('submit').addEventListener("click", function(){

  var firstNameInput= document.getElementById('first-name').value;
  var lastNameInput= document.getElementById('last-name').value;
  var emailInput= document.getElementById('email').value;
  var numberInput= document.getElementById('number').value;

  var textPattern=/^[A-Za-z ]+$/;
  var numberPattern=/^\d+$/;
  var emailPattern=/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (textPattern.test(firstNameInput)===false){
    document.getElementById('first-name').style.border="1px solid red";
  }

  if (textPattern.test(lastNameInput)===false){
    document.getElementById('last-name').style.border="1px solid red";
  }

  if (numberPattern.test(numberInput)===false){
    document.getElementById('number').style.border="1px solid red";
  }

  if (emailPattern.test(emailInput)===false){
    document.getElementById('email').style.border="1px solid red";
  }

})
