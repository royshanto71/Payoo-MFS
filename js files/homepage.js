const accPin = 1234; // account pin (for demo)

// ADD MONEY BUTTON FUNCTIONALITY
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission

    const bankName = document.getElementById("add-money-bank").value;
    const accountNumber = document.getElementById(
      "add-money-account-number"
    ).value;
    const addAmount = parseInt(
      document.getElementById("add-money-amount").value
    );
    const pin = parseInt(document.getElementById("add-money-pin").value);

    if (!bankName || !accountNumber || !addAmount || !pin) {
      alert("Please fill all fields");
      return;
    }

    if (accountNumber.length !== 11) {
      alert("Invalid account number");
      clearAddMoneyForm();
      return;
    }

    if (pin !== accPin) {
      alert("Invalid pin");
      clearAddMoneyForm();
      return;
    }

    const balanceElement = document.getElementById("balance");
    const availableBalance = parseInt(balanceElement.innerText);
    const newBalance = availableBalance + addAmount;

    balanceElement.innerText = newBalance;

    clearAddMoneyForm();
  });

// CASH OUT BUTTON FUNCTIONALITY
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();// prevent form submission

    const agentNumber = document.getElementById("agent-number-cash-out").value;
    const amount = parseInt(document.getElementById("amount-cash-out").value);
    const pin = parseInt(document.getElementById("pin-cash-out").value);

    if (!agentNumber || !amount || !pin) {
      alert("Please fill all fields");
      return;
    }

    if (agentNumber.length !== 11) {
      alert("Invalid agent number");
      clearCashOutForm();
      return;
    }

    if (pin !== accPin) {
      alert("Invalid pin");
      clearCashOutForm();
      return;
    }

    const balanceElement = document.getElementById("balance");
    const availableBalance = parseInt(balanceElement.innerText);

    if (amount > availableBalance) {
      alert("Insufficient balance");
      clearCashOutForm();
      return;
    }

    const newBalance = availableBalance - amount;
    balanceElement.innerText = newBalance;

    clearCashOutForm();
  });

// HELPER FUNCTIONS TO CLEAR FORMS
function clearAddMoneyForm() {
  document.getElementById("add-money-bank").value = "";
  document.getElementById("add-money-account-number").value = "";
  document.getElementById("add-money-amount").value = "";
  document.getElementById("add-money-pin").value = "";
}

function clearCashOutForm() {
  document.getElementById("agent-number-cash-out").value = "";
  document.getElementById("amount-cash-out").value = "";
  document.getElementById("pin-cash-out").value = "";
}
