const accPin = 1234; //account pin

//add money btn functionality
const addMoneyBtn = document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); //prevent form from submitting
    console.log("add money button clicked");//debug

    //add money form details
    const bankName = document.getElementById("selected-bank").value;
    const accountNumber = document.getElementById("bank-account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("pin").value);
    console.log(bankName, accountNumber, addAmount, pin);//debug

    //get available balance
    const availableBalance = parseInt(
      document.getElementById("balance").innerText
    );
    console.log(availableBalance);

    //calculate new balance
    const newBalance = availableBalance + addAmount;
    console.log(newBalance);//debug

    //check if account number is valid
    if (accountNumber.length !== 11) {
      alert("Invalid account number");
      // clear form
      document.getElementById("selected-bank").value = "";
      document.getElementById("bank-account-number").value = "";
      document.getElementById("add-amount").value = "";
      document.getElementById("pin").value = "";
      return;
    }

    //check if pin is valid
    if (pin !== accPin) {
      alert("Invalid pin");
      // clear form
      document.getElementById("selected-bank").value = "";
      document.getElementById("bank-account-number").value = "";
      document.getElementById("add-amount").value = "";
      document.getElementById("pin").value = "";
      return;
    }

    //update available balance
    document.getElementById("balance").innerText = newBalance;

    //clear form
    document.getElementById("selected-bank").value = "";
    document.getElementById("bank-account-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("pin").value = "";
  });
