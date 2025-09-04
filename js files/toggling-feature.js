// GET ELEMENTS (menu buttons)
const addMoneyBtn = document.getElementById("add-money");
const cashoutBtn = document.getElementById("cashout");
const transferBtn = document.getElementById("transfer-balance");
const bonusBtn = document.getElementById("get-bonus");
const payBillBtn = document.getElementById("pay-bill");
const transactionsBtn = document.getElementById("transactions");

// GET FORM SECTIONS
const addMoneyForm = document.getElementById("add-money-form");
const cashOutForm = document.getElementById("cash-out-form");
const transferForm = document.getElementById("transfer-form");
const bonusForm = document.getElementById("get-bonus-form");
const payBillForm = document.getElementById("pay-bill-form");
const transactionHistory = document.getElementById("transaction-history");

// HELPER FUNCTION TO HIDE ALL SECTIONS
function hideAllSections() {
  addMoneyForm.style.display = "none";
  cashOutForm.style.display = "none";
  transferForm.style.display = "none";
  bonusForm.style.display = "none";
  payBillForm.style.display = "none";
  transactionHistory.style.display = "none";
}

// ADD EVENT LISTENERS FOR TOGGLING
addMoneyBtn.addEventListener("click", function () {
  hideAllSections();
  addMoneyForm.style.display = "block";
  console.log("Add Money clicked");
});

cashoutBtn.addEventListener("click", function () {
  hideAllSections();
  cashOutForm.style.display = "block";
  console.log("Cash Out clicked");
});

transferBtn.addEventListener("click", function () {
  hideAllSections();
  transferForm.style.display = "block";
  console.log("Transfer Money clicked");
});

bonusBtn.addEventListener("click", function () {
  hideAllSections();
  bonusForm.style.display = "block";
  console.log("Get Bonus clicked");
});

payBillBtn.addEventListener("click", function () {
  hideAllSections();
  payBillForm.style.display = "block";
  console.log("Pay Bill clicked");
});

transactionsBtn.addEventListener("click", function () {
  hideAllSections();
  transactionHistory.style.display = "block";
  console.log("Transactions clicked");
});

hideAllSections(); // hides everything on page load

//toggling btn styles

const buttons = document.querySelectorAll(".utilities-btn");

for (const button of buttons) {
  button.addEventListener("click", function () {
    // remove the active border from all
    for (const btn of buttons) {
      btn.classList.remove("border-[rgba(8,116,242,1)]");
    }
    // add it to the clicked button
    button.classList.add("border-[rgba(8,116,242,1)]");
  });
}
