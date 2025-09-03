//login btn functionality
const loginBtn = document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); //prevent form from submitting

    //USER DATA
    const userPhoneNumber = 1234567890;
    const userPin = 1234;

    //get phone number and pin
    const phoneNumber = parseInt(document.getElementById("phone-number").value);
    const pin = parseInt(document.getElementById("pin").value);

    //check if phone number and pin are valid
    if (userPhoneNumber === phoneNumber && userPin === pin) {
      //redirect to home page
      window.location.href = "./homepage.html";
    } else {
      //show error message
      alert("Invalid phone number or pin");
    }
  });
