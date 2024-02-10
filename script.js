let firstCardSelected = false;
let selectedFirstCardId;
let firstCardMessage;

let thirdCardSelected = false;
let selectedThirdCardId;
let thirdCardMessage;

let matches = [];
function swipeLeft(cardId){
    document.getElementById(`card${cardId}`).style.display = 'none';

    // Display the next card if available
    const nextCardId = cardId < 9 ? cardId + 1 : 1;
    document.getElementById(`card${nextCardId}`).style.display = 'block';
}

function showFirstCards() {
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('firstCards').style.display = 'block';
    document.getElementById('home').style.display = 'none';
}

function selectFirstCard(cardId) {
    firstCardSelected = true;
    selectedFirstCardId = cardId;
    firstCardMessage = document.getElementById(`firstCard${cardId}Message`).textContent;

    document.getElementById('firstCards').style.display = 'none';
    document.getElementById('thirdCards').style.display = 'block';
}

function selectThirdCard(cardId) {
    thirdCardSelected = true;
    selectedThirdCardId = cardId;
    thirdCardMessage = document.getElementById(`thirdCard${cardId}Message`).textContent;

    document.getElementById('thirdCards').style.display = 'none';
    document.getElementById('secondCards').style.display = 'block';
}





function showFinalCard(chosenMessage, chosenImage) {
    let finalMessage;

    if (firstCardSelected && thirdCardSelected) {
        document.getElementById('secondCards').style.display = 'none';
        document.getElementById('finalCard').style.display = 'block';

        finalMessage = firstCardMessage + '<br>' + thirdCardMessage + '<br>' + chosenMessage;

        document.getElementById('finalMessage').innerHTML = finalMessage;
        document.getElementById('finalImage1').src = `../justins/justin${selectedFirstCardId}.jpg`;
        document.getElementById('finalImage2').src = `../images/image${selectedThirdCardId + 3}.jpg`;
        document.getElementById('finalImage3').src = chosenImage;
    }
}

function showHeartbreak() {
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('heartbreak').style.display = 'block';
    document.getElementById('home').style.display = 'none';
}

function goBack() {
    document.querySelector('.buttons').style.display = 'block';
    document.getElementById('firstCards').style.display = 'none';
    document.getElementById('thirdCards').style.display = 'none';
    document.getElementById('secondCards').style.display = 'none';
    document.getElementById('heartbreak').style.display = 'none';
    document.getElementById('finalCard').style.display = 'none';
    document.getElementById('home').style.display = 'block';
}

function restart() {
    document.querySelector('.buttons').style.display = 'block';
    document.getElementById('firstCards').style.display = 'none';
    document.getElementById('thirdCards').style.display = 'none';
    document.getElementById('secondCards').style.display = 'none';
    document.getElementById('heartbreak').style.display = 'none';
    document.getElementById('finalCard').style.display = 'none';
    document.getElementById('home').style.display = 'block';

    firstCardSelected = false;
    thirdCardSelected = false;
    selectedFirstCardId = undefined;
    selectedThirdCardId = undefined;
    firstCardMessage = undefined;
    thirdCardMessage = undefined;
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
    window.location.href="index.html"
}