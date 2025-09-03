//Add Money, Cashout, Transfer Money, Get Bonus, Pay Bill, Transactions toggling feature

//get elements
const addMoney = document.getElementById("add-money");
const cashout = document.getElementById("cashout");
const transferBalance = document.getElementById("transfer-balance");
const getBonus = document.getElementById("get-bonus");
const payBill = document.getElementById("pay-bill");
const transactions = document.getElementById("transactions");

//add event listeners
addMoney.addEventListener("click", function () {
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "block";
    console.log("Add Money clicked");
});
cashout.addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "block";
    console.log("Cashout clicked");
});
