document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   const withdrawField = document.getElementById("withdraw-field");
  //   const withdrawFieldValue = parseFloat(withdrawField.value);
  //   const withdrawTotal = document.getElementById("withdraw-total");
  //   const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
  //   const currentWithdrawTotal = previousWithdrawTotal + withdrawFieldValue;
  //   withdrawTotal.innerText = currentWithdrawTotal.toFixed(2);

  //   //   update the balance
  //   const totalBalance = document.getElementById("balance-total");
  //   const previousBalanceTotal = parseFloat(totalBalance.innerText);
  //   const currentBalance = previousBalanceTotal - withdrawFieldValue;
  //   totalBalance.innerText = currentBalance.toFixed(2);

  const withdrawField = document.getElementById("withdraw-field");
  const totalWithdraw = document.getElementById("withdraw-total");
  const previousWithdraw = parseFloat(totalWithdraw.innerText) + parseFloat(withdrawField.value);
  totalWithdraw.innerText = previousWithdraw.toFixed(2);

  //   update the balance
  const totalBalance = document.getElementById("balance-total");
  const remainingBalance = parseFloat(totalBalance.innerText) - parseFloat(withdrawField.value);
  totalBalance.innerText = remainingBalance.toFixed(2);

  withdrawField.value = "";
});
