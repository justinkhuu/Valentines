function showCards() {
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('cards').style.display = 'block';
}

function showHeartbreak() {
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('heartbreak').style.display = 'block';
}

function goBack() {
    document.querySelector('.buttons').style.display = 'block';
    document.getElementById('cards').style.display = 'none';
    document.getElementById('heartbreak').style.display = 'none';
}
