document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [{
            name: 'fries',
            img: './photos/fries.png'
        },
        {
            name: 'fries',
            img: './photos/fries.png'
        },
        {
            name: 'cheesburger',
            img: './photos/cheesburger.png'
        },
        {
            name: 'cheesburger',
            img: './photos/cheesburger.png'
        },
        {
            name: 'hotdog',
            img: './photos/hotdog.png'
        },
        {
            name: 'hotdog',
            img: './photos/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: './photos/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: './photos/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: './photos/milkshake.png'
        },
        {
            name: 'milkshake',
            img: './photos/milkshake.png'
        },
        {
            name: 'pizza',
            img: './photos/pizza.png'
        },
        {
            name: 'pizza',
            img: './photos/pizza.png'
        }

    ]
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
        //create my board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', './photos/blank.png')
            card.setAttribute('data-id', i)
                //card.addEventListener('click', flipcard)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]


        if (cardsChosen[0] === cardsChosen[1]) {

            alert('You found a match')
            cards[optionOneId].setAttribute('src', './photos/white.png')
            cards[optionTwoId].setAttribute('src', './photos/white.png')
            cardsWon.push(cardsChosen)
        } else {

            cards[optionOneId].setAttribute('src', './photos/blank.png')
            cards[optionTwoId].setAttribute('src', './photos/blank.png')
            alert('sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }

    }

    //flip my card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()

})