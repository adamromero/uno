let uno = (() => {
	let table = document.getElementById('table'),
		deck = [];

	class Card {
		constructor(img, face, color) {
			this.img = img;
			this.face = face;
			this.color = color;
		}

	}

	class Player {

	}

	createCards = () => {
		deck.push(new Card('wild', 'Wild', ''));
		deck.push(new Card('y-0', '0', 'Yellow'));
		deck.push(new Card('y-1', '1', 'Yellow'));
		deck.push(new Card('y-2', '2', 'Yellow'));
		deck.push(new Card('y-3', '3', 'Yellow'));
		deck.push(new Card('y-4', '4', 'Yellow'));
		deck.push(new Card('y-5', '5', 'Yellow'));
		deck.push(new Card('y-6', '6', 'Yellow'));
	}

	render = () => {
		let cards = '';
		deck.forEach(function(card) {
			cards += `<div class='card-init ${card.img} ${card.color}'></div>`;
		})
		table.innerHTML = cards;
	}

	init = () => {
		createCards();
		
		deck.forEach(function(card) {
			console.log(card);
		})
		render();
	}

	return {
		init
	}
})();

uno.init();