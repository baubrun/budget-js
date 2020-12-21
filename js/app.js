class App {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");

    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");

    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");

    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");

    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");

    this.amountInput = document.getElementById("amount-input");

    this.expenseList = document.getElementById("expense-list");

    this.itemList = [];
    this.itemID = 0;
  }

  addExpense(expense) {
    const div = document.createElement("div")
    div.classList.add("expense")
    div.innerHTML = `
    <div class="expense-item d-flex justify-content-between align-items-baseline">

         <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>
         <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

         <div class="expense-icons list-item">

          <a href="#" class="edit-icon mx-5" data-id="${expense.id}">
           <i class="fas fa-edit fa-2x"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash fa-2x"></i>
          </a>
         </div>
    </div>`

    this.expenseList.appendChild(div)
  }

  totalExpense() {
    let total = 400
    return total
  }


  showBalance() {
    const expense = this.totalExpense()
    const total = parseInt(this.budgetAmount.textContent) - expense
    this.balanceAmount.textContent = total
    if (total === 0) {
      this.balance.classList.remove("showGreen", "showRed")
      this.balance.classList.add("showBlack")
    } else if (total < 0) {
      this.balance.classList.remove("showGreen", "showBlack")
      this.balance.classList.add("showRed")
    } else if (total > 0) {
      this.balance.classList.remove("showRed", "showBlack")
      this.balance.classList.add("showGreen")
    }
  }


  submitBudgetForm() {
    const value = this.budgetInput.value
    if (!value || value <= 0) {
      this.budgetFeedback.classList.add("showItem")
      this.budgetFeedback.innerHTML = "<p>Enter bigger value</p>"
      setTimeout(() => {
        this.budgetFeedback.classList.remove("showItem")
      }, 4000)
    } else {
      this.budgetAmount.textContent = value
      this.budgetInput.value = ""
      this.showBalance()
    }
  }


  submitExpenseForm() {
    const expenseName = this.expenseInput.value
    const amountValue = this.amountInput.value
    if (!expenseName || !amountValue || amountValue < 0) {
      this.expenseFeedback.classList.add("showItem")
      this.expenseFeedback.innerHTML = "<p>Cannot be empty or less than 0.</p>"
      setTimeout(() => {
        this.expenseFeedback.classList.remove("showItem")
      }, 4000)

    } else {
      const amount = parseInt(amountValue)
      this.expenseAmount.textContent = amount
      this.amountInput.value = ""
      this.expenseInput.value = ""

      const expense = {
        id: this.itemID,
        title: expenseName,
        amount,

      }

      this.itemList = [...this.itemList, expense]
      this.addExpense(expense)
    }
  }





}


const eventListeners = () => {
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');

  const app = new App()

  budgetForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    app.submitBudgetForm(evt.target.value)
  })
  expenseForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    app.submitExpenseForm()
  })
  // expenseList.addEventListener("click", (evt) => {

  // })

}

document.addEventListener("DOMContentLoaded", () => {
  eventListeners()
})