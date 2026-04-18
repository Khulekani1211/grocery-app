const budgetInput = document.getElementById('budget0');
const itemNameInput = document.getElementById('itemName');
const priceInput = document.getElementById('price');
const qtyInput = document.getElementById('qty');
const listContainer = document.getElementById('list');
const grandTotalElement = document.getElementById('grandTotal');
const remainingBudgetElement = document.getElementById('remainingBudget');

let budget = 0;
let items = [];
let price = 0;
let grandTotal = 0;
let remainingBudget = 0;

budgetInput.addEventListener('input', () => {
    budget = parseFloat(budgetInput.value) || 0;
    updateBudget();
});

priceInput.addEventListener('input', () => {
    price = parseFloat(priceInput.value) || 0;
    grandTotal = price * (parseInt(qtyInput.value) || 0);
    updateBudget();
});
qtyInput.addEventListener('input', () => {
    const qty = parseInt(qtyInput.value) || 0;
    grandTotal = price * qty;
    //updateBudget();
});

const updateGrandTotal = () => {
    const price = parseFloat(priceInput.value) || 0;
    const qty = parseInt(qtyInput.value) || 0;
    grandTotal = price * qty;
    grandTotalElement.textContent = `${grandTotal.toFixed(2)}`;
};


const updateBudget = () => {
    remainingBudget = budget - grandTotal;
    remainingBudgetElement.textContent = `${remainingBudget.toFixed(2)}`;
};

const addItem = () => {
    const itemName = itemNameInput.value.trim();
    const price = parseFloat(priceInput.value) || 0;
    const qty = parseInt(qtyInput.value) || 0;
    items.push({ itemName, price, qty });
    updateBudget();
    updateGrandTotal();
};

// const renderList = () => {
//     listContainer.innerHTML = '';
//     items.forEach((item, index) => {
//         const itemElement = document.createElement('div');
//         itemElement.textContent = `${item.itemName} - $${item.price.toFixed(2)} x ${item.qty}`;
//         listContainer.appendChild(itemElement);
//     });
// };