document.getElementById("btn-withdraw").addEventListener("click", function () {
  // call the input and convert them to number
  const withdrawField = parseFloat(document.getElementById("withdraw-field").value);
  const totalWithdraw = parseFloat(document.getElementById("withdraw-total").innerText);

  // get the total withdraw
  const previousWithdraw = totalWithdraw + withdrawField;

  // clear the input field
  document.getElementById("withdraw-field").value = "";

  // check whether the input is a valid
  if (isNaN(withdrawField)) {
    return alert("please input a number");
  }

  //   call the text in the balance section
  const totalBalance = parseFloat(document.getElementById("balance-total").innerText);

  // check whether the withdraw amount is correct
  if (withdrawField > totalBalance) {
    return alert("You don't have enough money to withdraw");
  }

  // set the total withdraw in the withdraw section
  document.getElementById("withdraw-total").innerText = previousWithdraw.toFixed(2);

  // set the total balance in the balance section
  const remainingBalance = totalBalance - withdrawField;
  document.getElementById("balance-total").innerText = remainingBalance.toFixed(2);
});
