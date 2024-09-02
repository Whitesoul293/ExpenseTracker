const categoryGroup = document.getElementById('categoryGroup');
const inputText = document.getElementById('inputText');
const inputPrice = document.getElementById('inputPrice');
const inputDate = document.getElementById('inputDate');
const myBtn = document.getElementById('addBtn');
const expenseTableBody = document.getElementById('expenseTableBody');
const totalAmount = document.getElementById('totalAmount');


// Questo array vuoto serve per poter inglobare le spese che vengono inserite
const expenses = [];

// variabile impostata a 0 per poter far si che venga sommato il totale delle spese
let expensesAmount = 0;

addBtn.addEventListener('click', function(){
    const category = categoryGroup.value;
    const description = inputText.value;
    const price = Number(inputPrice.value);
    const date = inputDate.value;

    // Alert per inserire tutti i campi

    // Alert per la categoria
    if (category === ''){
        alert('Seleziona una categoria');
        return;
    }

    // Alert per la descrizione
    if(description === ''){
        alert('Inserisci una descrizione');
        return;
    }

    // Alert per il prezzo
    if (isNaN(price) || price <=0){
        alert('Inserisci un prezzo valido');
        return;
    }

    // Alert per la data
    if (date === ''){
        alert('Inserisci la data');
        return;
    }

    // Aggiungo le spese alla lista
    expenses.push({category, price, description, date});

    // totale spese
    expensesAmount += price;

    // inserisco il totale nel HTML
    totalAmount.textContent = expensesAmount;
})