document.getElementById('deposit-btn').addEventListener("click", function () {
    const depositfild = document.getElementById('deposit-fild');

    const depostivalue = parseFloat(depositfild.value);
    if (isNaN(depostivalue)) {
        alert("Please give ma a valid amount")
    }
    else {
        const updateFild = document.getElementById('update-deposit');
        const updateText = parseFloat(updateFild.innerText);
        updateFild.innerText = depostivalue + updateText;
        const balance = document.getElementById('balance');
        const balanceValu = parseFloat(balance.innerText);
        balance.innerText = depostivalue + balanceValu;
        depositfild.value = '';
    }

})
document.getElementById('withdrow-btn').addEventListener("click", function () {
    const withdrowfild = document.getElementById('withdrow-fild');
    const withdrowvalue = parseFloat(withdrowfild.value);
    if (isNaN(withdrowvalue)) {
        alert('Please give me a valid amount')
    }
    else {
        const updateFild = document.getElementById('update-withdrow');
        const updateText = parseFloat(updateFild.innerText);
        const balance = document.getElementById('balance');
        const balanceValu = parseFloat(balance.innerText);
        if (withdrowvalue <= balanceValu) {
            updateFild.innerText = withdrowvalue + updateText;
            balance.innerText = balanceValu - withdrowvalue
        }
        else {
            alert('Upner ato taka nai')
        }
        withdrowfild.value = '';
    }
})

