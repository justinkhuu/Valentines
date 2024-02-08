let firstCardSelected = false;
let selectedFirstCardId;
let firstCardMessage;

function showFirstCards() {
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('firstCards').style.display = 'block';
}

function selectFirstCard(cardId) {
    firstCardSelected = true;
    selectedFirstCardId = cardId;
    firstCardMessage = document.getElementById(`firstCard${cardId}Message`).textContent;

    document.getElementById('firstCards').style.display = 'none';
    document.getElementById('secondCards').style.display = 'block';
}

function showFinalCard(chosenMessage, chosenImage) {
    let finalMessage;

    if (firstCardSelected) {
        document.getElementById('secondCards').style.display = 'none';
        document.getElementById('finalCard').style.display = 'block';

        finalMessage = firstCardMessage + '<br>' + chosenMessage;

        document.getElementById('finalMessage').innerHTML = finalMessage;
        document.getElementById('finalImage1').src = `./images/image${selectedFirstCardId}.jpg`;
        document.getElementById('finalImage2').src = `./images/${chosenImage}`;
    }
}

function showHeartbreak() {
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('heartbreak').style.display = 'block';
}

function goBack() {
    document.querySelector('.buttons').style.display = 'block';
    document.getElementById('firstCards').style.display = 'none';
    document.getElementById('secondCards').style.display = 'none';
    document.getElementById('heartbreak').style.display = 'none';
    document.getElementById('finalCard').style.display = 'none';
}

function restart() {
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('firstCards').style.display = 'block';
    document.getElementById('secondCards').style.display = 'none';
    document.getElementById('heartbreak').style.display = 'none';
    document.getElementById('finalCard').style.display = 'none';

    firstCardSelected = false;
    selectedFirstCardId = undefined;
    firstCardMessage = undefined;
}

async function goBackToFirstCard(){
    console.log("done")
    window.location.href="../../index.html"
    await sleep(2000)
    showFirstCards();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
        console.log("Waiting seconds...");
        await sleep(2000);
    console.log('Done');
}

function print(){
    print("my Message")
}

function showFirstPage(){
    window.location.href="chooseADate.html"
}