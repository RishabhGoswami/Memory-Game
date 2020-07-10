document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [

        {
            name: 'first',
            img: 'first.jpg'
        },
        {
            name: 'first',
            img: 'first.jpg'
        },
        {
            name: 'second',
            img: 'second.jpg'
        },
        {
            name: 'second',
            img: 'second.jpg'
        },
        {
            name: 'third',
            img: 'third.jpg'
        },
        {
            name: 'third',
            img: 'third.jpg'
        },
        {
            name: 'forth',
            img: 'forth.jpg'
        },
        {
            name: 'forth',
            img: 'forth.jpg'
        },
        {
            name: 'fifth',
            img: 'fifth.jpg'
        },
        {
            name: 'fifth',
            img: 'fifth.jpg'
        },
        {
            name: 'sixth',
            img: 'sixth.jpg'
        },
        {
            name: 'sixth',
            img: 'sixth.jpg'
        }

    ]
    cardArray.sort(() => 0.5 - Math.random())
    cardchoose = []
    cardchooseid = []
    already = []                                                           
    const results = document.querySelector('#result')
    const grid = document.querySelector('.grid')
    points = []
    function check() {
        var allcard = document.querySelectorAll('img')
        const firstcardid = cardchooseid[0]
        const secondcardid = cardchooseid[1]
        if (cardchoose[0] === cardchoose[1]) {
            alert('yes')
            cardchoose = []
            cardchooseid = []
            allcard[firstcardid].setAttribute('src', 'none.jpg')
            allcard[secondcardid].setAttribute('src', 'none.jpg')
            points.push('z')
        }
        else {
            alert('no')
            allcard[firstcardid].setAttribute('src', 'craft.jpg')
            allcard[secondcardid].setAttribute('src', 'craft.jpg')
            cardchoose = []
            cardchooseid = []
        }
        results.textContent = ((points.length) * 10)
        if (points.length === 6) {
            alert('you won')

        }
    }
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'craft.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flip)
            grid.appendChild(card)
        }
    }
    createBoard()
    function flip() {
        var cardid = this.getAttribute('data-id')
        cardchoose.push(cardArray[cardid].name)
        cardchooseid.push(cardid)
        this.setAttribute('src', cardArray[cardid].img)
        if (cardchoose.length == 2) {
            setTimeout(check, 100)
        }

    }

})

