document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmount = parseFloat(depositField.value);
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotal = parseFloat(depositTotalElement.innerText);
  depositField.value = "";
  if (isNaN(newDepositAmount)) {
    return alert("please input a number");
  }
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal.toFixed(2);

  // update the balance
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal.toFixed(2);
});
