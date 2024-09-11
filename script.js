let expenses = [];
let totalAmount = 0;

const categoryGroup = document.getElementById('categoryGroup');
const inputText = document.getElementById('inputText');
const inputAmount = document.getElementById('inputAmount');
const inputDate = document.getElementById('inputDate');
const addBtn = document.getElementById('addBtn');
const expensesList = document.getElementById('expensesList');
const expenseTableBody = document.getElementById('expenseTableBody');
const totalAmountSection = document.getElementById('totalAmountSection');

// Messaggi di errore
const errorCategory = document.getElementById('errorCategory');
const errorDescription = document.getElementById('errorDescription');
const errorAmount = document.getElementById('errorAmount');
const errorDate = document.getElementById('errorDate');

addBtn.addEventListener('click', function(){
    const category = categoryGroup.value;
    const description = inputText.value;
    const amount = Number(inputAmount.value);
    const date = inputDate.value;

    if(category === 'default'){
        alert('Seleziona una categoria');
        return;
    }

    if(description === ''){
        alert('Descrivi la spesa brevemente');
        return;
    }

    if(isNaN(amount) || amount <= 0){
        alert(`Inserisci l'importo della spesa`);
        return;
    }

    if(date === ''){
        alert(`Inserisci la data della spesa`);
        return;
    }

    // aggiungo le spese all'array vuoto
    expenses.push( {category, description, amount, date})

    totalAmount += amount;
    totalAmountSection.textContent = totalAmount;
        
    // Vado a popolare l'array inserendolo all'ultimo posto
    const expense = expenses[expenses.length - 1];

    // Genero una nuova riga nella tabella
    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const descriptionCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const delateCell = newRow.insertCell();

    // Popolo la tabella con i dati della spesa
    categoryCell.textContent = expense.category;
    descriptionCell.textContent = expense.description;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;

    // Creo il bottone per eliminare la spesa
    const dalateBtn = document.createElement('button');
    dalateBtn.textContent = 'Elimina';
    dalateBtn.classList.add('dalateBtn');
   
    // Funzione per eliminare la spesa
    dalateBtn.addEventListener('click', function(){

        // Elimino la spesa dall'array
        expenses.splice(expenses.indexOf(expense),1);

        // Aggiorno il totale
        totalAmount -= expense.amount;
        totalAmountSection.textContent = totalAmount;

        // Rimuovo la riga dalla tabella
        expenseTableBody.removeChild(newRow);
    });

    // vado ad appendere il bottone
    delateCell.appendChild(dalateBtn);

});
