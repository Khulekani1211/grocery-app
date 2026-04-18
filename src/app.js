const budgetInput = document.getElementById('budget0');
const itemNameInput = document.getElementById('itemName');
const priceInput = document.getElementById('price');
const qtyInput = document.getElementById('qty');
const listContainer = document.getElementById('list');
const grandTotalElement = document.getElementById('grandTotal');
const remainingBudgetElement = document.getElementById('remainingBudget');

let budget = 0;
let items = [];
let grandTotal = 0;
let remainingBudget = 0;

budgetInput.addEventListener('input', () => {
    budget = parseFloat(budgetInput.value) || 0;
    updateBudget();
});

const updateBudget = () => {
    remainingBudget = budget - grandTotal;
    remainingBudgetElement.textContent = `${remainingBudget.toFixed(2)}`;
}