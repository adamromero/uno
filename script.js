let uno = (() => {
	let table = document.getElementById('table'),
		drawTrigger = document.getElementById('drawFromDeck'),
		deck = [], 
		player;

	class Card {
		constructor(img, face, color) {
			this.id = Math.random().toString(36).substring(7);
			this.img = img;
			this.face = face;
			this.color = color;
		}
	}

	class Player {
		constructor(hand) {
			this.hand = hand;
		}

		drawACard = () => {
			console.log('draw a card');
		}

		getDeck = () => {
			return this.hand;
		}

		playCard = () => {
			
		}
	}

	createCards = () => {
		deck.push(new Card('wild', 'Wild', ''));
		deck.push(new Card('wild', 'Wild', ''));
		deck.push(new Card('wild', 'Wild', ''));
		deck.push(new Card('wild', 'Wild', ''));
		deck.push(new Card('wild-4', 'Wild Draw 4', ''));
		deck.push(new Card('wild-4', 'Wild Draw 4', ''));
		deck.push(new Card('wild-4', 'Wild Draw 4', ''));
		deck.push(new Card('wild-4', 'Wild Draw 4', ''));

		deck.push(new Card('y-0', '0', 'Yellow'));
		deck.push(new Card('y-1', '1', 'Yellow'));
		deck.push(new Card('y-2', '2', 'Yellow'));
		deck.push(new Card('y-3', '3', 'Yellow'));
		deck.push(new Card('y-4', '4', 'Yellow'));
		deck.push(new Card('y-5', '5', 'Yellow'));
		deck.push(new Card('y-6', '6', 'Yellow'));
		deck.push(new Card('y-7', '7', 'Yellow'));
		deck.push(new Card('y-8', '8', 'Yellow'));
		deck.push(new Card('y-9', '9', 'Yellow'));
		deck.push(new Card('y-1', '1', 'Yellow'));
		deck.push(new Card('y-2', '2', 'Yellow'));
		deck.push(new Card('y-3', '3', 'Yellow'));
		deck.push(new Card('y-4', '4', 'Yellow'));
		deck.push(new Card('y-5', '5', 'Yellow'));
		deck.push(new Card('y-6', '6', 'Yellow'));
		deck.push(new Card('y-7', '7', 'Yellow'));
		deck.push(new Card('y-8', '8', 'Yellow'));
		deck.push(new Card('y-9', '9', 'Yellow'));
		deck.push(new Card('y-d-2', 'Draw 2', 'Yellow'));
		deck.push(new Card('y-d-2', 'Draw 2', 'Yellow'));
		deck.push(new Card('y-s', 'Skip', 'Yellow'));
		deck.push(new Card('y-s', 'Skip', 'Yellow'));
		deck.push(new Card('y-r', 'Reverse', 'Yellow'));
		deck.push(new Card('y-r', 'Reverse', 'Yellow'));

		deck.push(new Card('r-0', '0', 'Red'));
		deck.push(new Card('r-1', '1', 'Red'));
		deck.push(new Card('r-2', '2', 'Red'));
		deck.push(new Card('r-3', '3', 'Red'));
		deck.push(new Card('r-4', '4', 'Red'));
		deck.push(new Card('r-5', '5', 'Red'));
		deck.push(new Card('r-6', '6', 'Red'));
		deck.push(new Card('r-7', '7', 'Red'));
		deck.push(new Card('r-8', '8', 'Red'));
		deck.push(new Card('r-9', '9', 'Red'));
		deck.push(new Card('r-1', '1', 'Red'));
		deck.push(new Card('r-2', '2', 'Red'));
		deck.push(new Card('r-3', '3', 'Red'));
		deck.push(new Card('r-4', '4', 'Red'));
		deck.push(new Card('r-5', '5', 'Red'));
		deck.push(new Card('r-6', '6', 'Red'));
		deck.push(new Card('r-7', '7', 'Red'));
		deck.push(new Card('r-8', '8', 'Red'));
		deck.push(new Card('r-9', '9', 'Red'));
		deck.push(new Card('r-d-2', 'Draw 2', 'Red'));
		deck.push(new Card('r-d-2', 'Draw 2', 'Red'));
		deck.push(new Card('r-s', 'Skip', 'Red'));
		deck.push(new Card('r-s', 'Skip', 'Red'));
		deck.push(new Card('r-r', 'Reverse', 'Red'));
		deck.push(new Card('r-r', 'Reverse', 'Red'));

		deck.push(new Card('b-0', '0', 'Blue'));
		deck.push(new Card('b-1', '1', 'Blue'));
		deck.push(new Card('b-2', '2', 'Blue'));
		deck.push(new Card('b-3', '3', 'Blue'));
		deck.push(new Card('b-4', '4', 'Blue'));
		deck.push(new Card('b-5', '5', 'Blue'));
		deck.push(new Card('b-6', '6', 'Blue'));
		deck.push(new Card('b-7', '7', 'Blue'));
		deck.push(new Card('b-8', '8', 'Blue'));
		deck.push(new Card('b-9', '9', 'Blue'));
		deck.push(new Card('b-1', '1', 'Blue'));
		deck.push(new Card('b-2', '2', 'Blue'));
		deck.push(new Card('b-3', '3', 'Blue'));
		deck.push(new Card('b-4', '4', 'Blue'));
		deck.push(new Card('b-5', '5', 'Blue'));
		deck.push(new Card('b-6', '6', 'Blue'));
		deck.push(new Card('b-7', '7', 'Blue'));
		deck.push(new Card('b-8', '8', 'Blue'));
		deck.push(new Card('b-9', '9', 'Blue'));
		deck.push(new Card('b-d-2', 'Draw 2', 'Blue'));
		deck.push(new Card('b-d-2', 'Draw 2', 'Blue'));
		deck.push(new Card('b-s', 'Skip', 'Blue'));
		deck.push(new Card('b-s', 'Skip', 'Blue'));
		deck.push(new Card('b-r', 'Reverse', 'Blue'));
		deck.push(new Card('b-r', 'Reverse', 'Blue'));

		deck.push(new Card('g-0', '0', 'Green'));
		deck.push(new Card('g-1', '1', 'Green'));
		deck.push(new Card('g-2', '2', 'Green'));
		deck.push(new Card('g-3', '3', 'Green'));
		deck.push(new Card('g-4', '4', 'Green'));
		deck.push(new Card('g-5', '5', 'Green'));
		deck.push(new Card('g-6', '6', 'Green'));
		deck.push(new Card('g-7', '7', 'Green'));
		deck.push(new Card('g-8', '8', 'Green'));
		deck.push(new Card('g-9', '9', 'Green'));
		deck.push(new Card('g-1', '1', 'Green'));
		deck.push(new Card('g-2', '2', 'Green'));
		deck.push(new Card('g-3', '3', 'Green'));
		deck.push(new Card('g-4', '4', 'Green'));
		deck.push(new Card('g-5', '5', 'Green'));
		deck.push(new Card('g-6', '6', 'Green'));
		deck.push(new Card('g-7', '7', 'Green'));
		deck.push(new Card('g-8', '8', 'Green'));
		deck.push(new Card('g-9', '9', 'Green'));
		deck.push(new Card('g-d-2', 'Draw 2', 'Green'));
		deck.push(new Card('g-d-2', 'Draw 2', 'Green'));
		deck.push(new Card('g-s', 'Skip', 'Green'));
		deck.push(new Card('g-s', 'Skip', 'Green'));
		deck.push(new Card('g-r', 'Reverse', 'Green'));
		deck.push(new Card('g-r', 'Reverse', 'Green'));
	}

	removeCardFromDeck = (dealedDeck) => {
		var removeIndex = dealedDeck.map(function(item) { 
			return item.id; 
		});
		deck.splice(removeIndex, 1);
	}

	dealCards = () => {
		let dealedDeck = [];
		for (let i = 0; i < 7; i++) {
			let random = Math.floor(Math.random() * Math.floor(deck.length));
			dealedDeck.push(deck[random]);
			removeCardFromDeck(dealedDeck);
		}

		return dealedDeck;
	}

	render = (cardDeck, appendTo) => {
		let cards = '';
		cardDeck.forEach(function(card) {
			//console.log(card);
			cards += `<div class='card-init ${card.img}'></div>`;

		})
		appendTo.innerHTML = cards;
	}

	handleEventListener = () => {
		document.querySelectorAll('.card-init').forEach(function (card) {
			card.addEventListener('click', function (e) {
				if (e.target.id === 'drawFromDeck') {
					player.drawACard();
				}
			});
		});

		document.getElementById('deck').addEventListener('click', function (e) {
			
			console.log('deck clicked');
			
		});
	}

	init = () => {
		createCards();

		player = new Player(dealCards());
		render(deck, document.getElementById('deck'));
		render(player.getDeck(), document.getElementById('player'));

		handleEventListener();
	}

	return {
		init
	}
})();

uno.init();