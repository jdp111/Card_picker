
function Deck() {
    return new Promise((resolve, reject) => {
        let res = $.getJSON("https://deckofcardsapi.com/api/deck/new/draw?count=52");
        resolve(res);
        reject(false);
    })
}



var newDeck =[]

Deck()
    .then(res =>{
        const newimg = $("<img id = 'cardpic'></img>")
        $("#card").append(newimg);
        
        const but = $("<button id = 'new'>New Card</button>")
        $("body").append(but)
        

        newDeck = res.cards;
        $("#new").click(() =>{
                    console.log("press")
                    newCard(newDeck)
        })
    })
    .catch(rej=> {
        return rej
    })



function newCard(deck) {
    
    const card = deck[deck.length-1];
    if (!card){
        $("body").append("no more cards left!")
    }
    deck.pop();
    $("#cardpic").attr("src",card.image);
}
