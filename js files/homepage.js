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
    event.preventDefault(); // prevent form submission

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

// TRANSFER MONEY BUTTON FUNCTIONALITY
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission

    const accountNumber = document.getElementById(
      "account-number-for-transfer"
    ).value;
    const amount = parseInt(
      document.getElementById("amount-to-transfer").value
    );
    const pin = parseInt(document.getElementById("pin-for-transfer").value);

    if (!accountNumber || !amount || !pin) {
      alert("Please fill all fields");
      return;
    }

    if (accountNumber.length !== 11) {
      alert("Invalid account number");
      clearTransferForm();
      return;
    }

    if (pin !== accPin) {
      alert("Invalid pin");
      clearTransferForm();
      return;
    }

    const balanceElement = document.getElementById("balance");
    const availableBalance = parseInt(balanceElement.innerText);

    if (amount > availableBalance) {
      alert("Insufficient balance");
      clearTransferForm();
      return;
    }

    const newBalance = availableBalance - amount;
    balanceElement.innerText = newBalance;

    clearTransferForm();
  });

// BONUS COUPONS (demo list)
const bonusCoupons = {
  BONUS100: 100,
  BONUS200: 200,
  WELCOME50: 50,
};

// GET BONUS BUTTON FUNCTIONALITY
document
  .getElementById("get-bonusby-coupon-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission

    const coupon = document
      .getElementById("bonus-coupon")
      .value.trim()
      .toUpperCase();

    if (!coupon) {
      alert("Please enter a coupon code");
      return;
    }

    if (!bonusCoupons[coupon]) {
      alert("Invalid coupon code");
      clearBonusForm();
      return;
    }

    const bonusAmount = bonusCoupons[coupon];
    const balanceElement = document.getElementById("balance");
    const availableBalance = parseInt(balanceElement.innerText);
    const newBalance = availableBalance + bonusAmount;

    balanceElement.innerText = newBalance;

    alert(`🎉 Coupon applied! You received ${bonusAmount} bonus.`);

    clearBonusForm();
  });

// PAY BILL FUNCTIONALITY
document
  .getElementById("paybill-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission

    const biller = document.getElementById("biller").value;
    const accountNumber = document.getElementById("biller-account").value;
    const amount = parseInt(document.getElementById("amount-to-pay").value);
    const pin = parseInt(document.getElementById("pin-for-paybill").value);

    // Check all fields
    if (!biller || !accountNumber || !amount || !pin) {
      alert("Please fill all fields");
      return;
    }

    // Validate account number
    if (accountNumber.length !== 11) {
      alert("Invalid account number");
      clearPayBillForm();
      return;
    }

    // Validate pin
    if (pin !== accPin) {
      alert("Invalid pin");
      clearPayBillForm();
      return;
    }

    // Check balance
    const balanceElement = document.getElementById("balance");
    const availableBalance = parseInt(balanceElement.innerText);

    if (amount > availableBalance) {
      alert("Insufficient balance");
      clearPayBillForm();
      return;
    }

    // Deduct amount
    balanceElement.innerText = availableBalance - amount;
    alert("Bill payment successful!");

    clearPayBillForm();
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

function clearTransferForm() {
  document.getElementById("account-number-for-transfer").value = "";
  document.getElementById("amount-to-transfer").value = "";
  document.getElementById("pin-for-transfer").value = "";
}
function clearBonusForm() {
  document.getElementById("bonus-coupon").value = "";
}
function clearPayBillForm() {
  document.getElementById("biller").value = "";
  document.getElementById("biller-account").value = "";
  document.getElementById("amount-to-pay").value = "";
  document.getElementById("pin-for-paybill").value = "";
}
