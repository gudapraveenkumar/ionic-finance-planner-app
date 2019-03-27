const reasonInput = document.querySelector("#reason");
const amountInput = document.querySelector("#amount");
const cancelBtn = document.querySelector("#btn-cancel");
const addBtn = document.getElementById("btn-add");
const expensesList = document.querySelector("#expenses-list");
const totalExpenses = document.querySelector("#total-expenses");

let totalAmount = 0;

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

addBtn.addEventListener("click", () => {
  const reason = reasonInput.value;
  const amount = amountInput.value;

  if (reason.trim().length <= 0 || amount <= 0 || amount.trim().length <= 0) {
    return;
  }

  const newItem = document.createElement("ion-item");
  newItem.textContent = reason + ": $" + amount;
  expensesList.appendChild(newItem);

  totalAmount += +amount;
  totalExpenses.textContent = totalAmount;
  clear();
});

cancelBtn.addEventListener("click", clear);
