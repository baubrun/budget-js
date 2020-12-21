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

  totalExpense(){
    let total = 400
    return total
  }


  showBalance(){
    const expense = this.totalExpense()
    const total = parseInt(this.budgetAmount.textContent) - expense
    this.balanceAmount.textContent = total
    if (total === 0){
      this.balance.classList.remove("showGreen", "showRed")
      this.balance.classList.add("showBlack")
    }
    else if (total < 0){
      this.balance.classList.remove("showGreen", "showBlack")
      this.balance.classList.add("showRed")
    }
    else if (total > 0){
      this.balance.classList.remove("showRed", "showBlack")
      this.balance.classList.add("showGreen")
    }
  }


  submitBudgetForm(){
    const value = this.budgetInput.value
    if (!value || value <= 0){
      this.budgetFeedback.classList.add("showItem")
      this.budgetFeedback.innerHTML = "<p>Enter bigger value</p>"
      setTimeout(() => {
        this.budgetFeedback.classList.remove("showItem")
      }, 4000)
    }
    else {
      this.budgetAmount.textContent = value
      this.budgetInput.value = ""
      this.showBalance()
    }
  }


  submitExpenseForm(){
    const expenseName = this.expenseInput.value
    const amountValue = this.amountInput.value
    if(!expenseName || !amountValue || amountValue < 0){
      this.expenseFeedback.classList.add("showItem")
      this.expenseFeedback.innerHTML = "<p>Cannot be empty or less than 0.</p>"
      setTimeout(() => {
        this.expenseFeedback.classList.remove("showItem")
      }, 4000)

    } else {
      let amount = parseInt(amountValue)
      this.expenseAmount.textContent = amount
      this.amountInput.value = ""
      this.expenseInput.value = ""
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