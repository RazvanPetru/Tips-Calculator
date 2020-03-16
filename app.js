function calculateTip() {
    const tip = document.querySelector('.tip__bill').value;
    const serviceQual = document.querySelector('.service__qual').value;
    const numOfPeople = document.querySelector('#people').value;

    if (tip === '' || serviceQual == 1) {
        alert('Please enter values');
        return;
    }

    if (numOfPeople === '' || numOfPeople <= 1) {
        numOfpeople = 1;

        const each = document.querySelector('#each').style.display = 'none';
    } else {
        const each = document.querySelector('#each').style.display = 'inline-block';
    }

    // Calculate tip

    let total = (tip * serviceQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.querySelector('.tipAmount').style.display = "flex";
    document.querySelector('#amount').innerHTML = total;
}

document.querySelector('.tipAmount').style.display = "none";
document.querySelector('#each').style.display = 'none';

document.querySelector('#calculate').onclick = function () {
    calculateTip();
};