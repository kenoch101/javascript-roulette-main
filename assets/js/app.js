let bankValue = 1000;// Represents the total value of the player's bank.
let currentBet = 0;// Represents the current bet amount.
let wager = 5;// Represents the amount the player wishes to wager in each round.
let lastWager = 0;// Stores the last wager amount.
let bet = [];// An array to store bet values from previous rounds.
let numbersBet = [];// An array to store numbers bet on in each round.
let previousNumbers = [];// An array to store previous numbers that have been bet on.

let numRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];// An array representing the numbers on the roulette wheel that are red.
let wheelnumbersAC = [0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32];
// An array representing the numbers on the roulette wheel in their actual order.


// Create a new HTML container element with the id 'container'.
let container = document.createElement('div');
container.setAttribute('id', 'container');

// Append the 'container' element to the body of the HTML document.
document.body.append(container);
// Call the 'startGame' function to initialize the game.
startGame();
// Get the first element with the class name 'wheel' and store it in the 'wheel' variable.
let wheel = document.getElementsByClassName('wheel')[0];
// Get the first element with the class name 'ballTrack' and store it in the 'ballTrack' variable.
let ballTrack = document.getElementsByClassName('ballTrack')[0];


// Function to reset the game to its initial state.
function resetGame(){
	// Reset various game-related variables.
	bankValue = 1000;
	currentBet = 0;
	wager = 5;
	bet = [];
	numbersBet = [];
	previousNumbers = [];
	// Remove the 'betting_board' and 'notification' elements from the HTML document.
	document.getElementById('betting_board').remove();
	document.getElementById('notification').remove();

	// Rebuild the betting board to start a new game.
	buildBettingBoard();
}

// Function to start the game by building the wheel and the betting board.
function startGame(){
	// Build the roulette wheel.
	buildWheel();
	// Build the initial betting board
	buildBettingBoard();
}

// Function to display a game over notification.
function gameOver(){
	// Create a new HTML element for the game over notification with the id 'notification'.
	let notification = document.createElement('div');
	notification.setAttribute('id', 'notification');

	 // Create a span element with the class 'nSpan' to display the game over message.
		let nSpan = document.createElement('span');
		nSpan.setAttribute('class', 'nSpan');
		nSpan.innerText = 'Bankrupt';// Message displayed in the notification.
		notification.append(nSpan);

		 // Create a button element with the class 'nBtn' to allow the player to play again.
		let nBtn = document.createElement('div');
		nBtn.setAttribute('class', 'nBtn');
		nBtn.innerText = 'Play again';	// Text on the play again button.

		 // Add a click event handler to the 'nBtn' element that calls the 'resetGame' function when clicked.
		nBtn.onclick = function(){
			resetGame(); // This function resets the game.
		};
		notification.append(nBtn);// Append the 'nBtn' element to the notification.

		
    // Add the 'notification' element to the beginning of the 'container'.
	container.prepend(notification);
}

// Function to build the roulette wheel and its numbered sections.
function buildWheel(){
	 // Create a new HTML element for the roulette wheel with the class 'wheel'.
	let wheel = document.createElement('div');
	wheel.setAttribute('class', 'wheel');

	 // Create an outer rim element for the wheel.
	let outerRim = document.createElement('div');
	outerRim.setAttribute('class', 'outerRim');
	wheel.append(outerRim);

	// Define an array of numbers in the order they appear on the roulette wheel.
	let numbers = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

	 // Loop through the numbers array to create the wheel's sections.
	for(i = 0; i < numbers.length; i++){
		let a = i + 1;
		// Determine the span class based on whether the number is single or double.
		let spanClass = (numbers[i] < 10)? 'single' : 'double';
		 // Create a section element with an id and class.
		let sect = document.createElement('div');
		sect.setAttribute('id', 'sect'+a);
		sect.setAttribute('class', 'sect');

		        // Create a span element to display the number with the appropriate class.
		let span = document.createElement('span');
		span.setAttribute('class', spanClass);
		span.innerText = numbers[i];// Display the number.
		sect.append(span);

		 // Create a block element for visual styling.
		let block = document.createElement('div');
		block.setAttribute('class', 'block');
		sect.append(block);

		 // Append the section to the wheel.
		wheel.append(sect);
	}

	  // The roulette wheel is now built with its numbered sections.

	// Create an element to represent the pockets rim of the wheel.
	let pocketsRim = document.createElement('div');
	pocketsRim.setAttribute('class', 'pocketsRim');
	wheel.append(pocketsRim);


	// Create an element to represent the ball track on the roulette wheel.
	let ballTrack = document.createElement('div');
	ballTrack.setAttribute('class', 'ballTrack');

	// Create an element for the ball itself and append it to the ball track.
	let ball = document.createElement('div');
	ball.setAttribute('class', 'ball');
	ballTrack.append(ball);
	// Append the ball track to the roulette wheel.
	wheel.append(ballTrack);

	// Create an element to represent the pockets on the roulette wheel.
	let pockets = document.createElement('div');
	pockets.setAttribute('class', 'pockets');
	// Append the pockets element to the roulette wheel.
	wheel.append(pockets);

	// Create an element to represent the cone on the roulette wheel.
	let cone = document.createElement('div');
	cone.setAttribute('class', 'cone');
	
	// Append the cone element to the roulette wheel.
	wheel.append(cone);

	// Create an element to represent the turret on the roulette wheel.
	let turret = document.createElement('div');
	turret.setAttribute('class', 'turret');
	// Append the turret element to the roulette wheel.
	wheel.append(turret);

	// Create an element to represent the turret handle.
	let turretHandle = document.createElement('div');
	turretHandle.setAttribute('class', 'turretHandle');
	// Create two elements to represent the ends of the turret handle.
	let thendOne = document.createElement('div');
	thendOne.setAttribute('class', 'thendOne');
	turretHandle.append(thendOne);
	let thendTwo = document.createElement('div');
	thendTwo.setAttribute('class', 'thendTwo');
	turretHandle.append(thendTwo);

	
// Append the turret handle and its ends to the roulette wheel.
	wheel.append(turretHandle);

	// Append the entire roulette wheel to the container in the HTML document.
	container.append(wheel);
}

// Function to build the betting board for the roulette game.
function buildBettingBoard(){
	 // Create a new HTML element to represent the betting board with the id 'betting_board'.
	let bettingBoard = document.createElement('div');
	bettingBoard.setAttribute('id', 'betting_board');

	    // Create an element for winning lines within the betting board.
	let wl = document.createElement('div');
	wl.setAttribute('class', 'winning_lines');
	
	  // Create a top section for winning lines within the betting board.
	var wlttb = document.createElement('div');
	wlttb.setAttribute('id', 'wlttb_top');
	wlttb.setAttribute('class', 'wlttb');

	  // Loop to create betting blocks for different sections.
	for(i = 0; i < 11; i++){
		let j = i;
		 // Create a betting block for a specific section.
		var ttbbetblock = document.createElement('div');
		ttbbetblock.setAttribute('class', 'ttbbetblock');
		  // Define numbers corresponding to this section.
		var numA = (1 + (3 * j));
		var numB = (2 + (3 * j));
		var numC = (3 + (3 * j));
		var numD = (4 + (3 * j));
		var numE = (5 + (3 * j));
		var numF = (6 + (3 * j));

		// Concatenate numbers for this section into a string.
		let num = numA + ', ' + numB + ', ' + numC + ', ' + numD + ', ' + numE + ', ' + numF;
		        // Define the type of betting object for this section.
		var objType = 'double_street';

		 // Add an onclick event to set a bet when the block is clicked.
		ttbbetblock.onclick = function(){
			setBet(this, num, objType, 5);
		};
		 // Add an oncontextmenu event to remove a bet when the block is right-clicked.
		ttbbetblock.oncontextmenu = function(e){
			e.preventDefault();
			removeBet(this, num, objType, 5);
		};
		
        // Append the betting block to the top section of winning lines.
		wlttb.append(ttbbetblock);
	}
	 // Append the top section of winning lines to the winning lines element.
	wl.append(wlttb);

	 // The betting board is now built with the top section of winning lines.

	 // Loop through 3 different sections of the betting board.
	for(c =  1; c < 4; c++){
		let d = c;

		// Create a new HTML element for a section of winning lines (e.g., wlttb_1, wlttb_2, wlttb_3).
		var wlttb = document.createElement('div');
		wlttb.setAttribute('id', 'wlttb_'+c);
		wlttb.setAttribute('class', 'wlttb');

		   // Loop through 12 betting blocks within each section.
		for(i = 0; i < 12; i++){
			let j = i;
			 // Create a betting block element within the section.
			var ttbbetblock = document.createElement('div');
			ttbbetblock.setAttribute('class', 'ttbbetblock');

			 // Add an onclick event to set a bet based on section (d).
			ttbbetblock.onclick = function(){
				   // Calculate the numbers and bet type based on the section (d).
				if(d == 1 || d == 2){
					var numA = ((2 - (d - 1)) + (3 * j));
					var numB = ((3 - (d - 1)) + (3 * j));
					var num = numA + ', ' + numB;
				}
				else{
					var numA = (1 + (3 * j));
					var numB = (2 + (3 * j));
					var numC = (3 + (3 * j));
					var num = numA + ', ' + numB + ', ' + numC;
				}
				var objType = (d == 3)? 'street' : 'split';
				var odd = (d == 3)? 11 : 17;
				setBet(this, num, objType, odd);
			};

			  // Add an oncontextmenu event to remove a bet based on section (d).
			ttbbetblock.oncontextmenu = function(e){
				e.preventDefault();
				// Calculate the numbers and bet type based on the section (d).
				if(d == 1 || d == 2){
					var numA = ((2 - (d - 1)) + (3 * j));
					var numB = ((3 - (d - 1)) + (3 * j));
					var num = numA + ', ' + numB;
				}
				else{
					var numA = (1 + (3 * j));
					var numB = (2 + (3 * j));
					var numC = (3 + (3 * j));
					var num = numA + ', ' + numB + ', ' + numC;
				}
				var objType = (d == 3)? 'street' : 'split';
				var odd = (d == 3)? 11 : 17;
				removeBet(this, num, objType, odd);
			};
			 // Append the betting block to the section of winning lines.
			wlttb.append(ttbbetblock);
		}
		// Append the section of winning lines to the winning lines element.
		wl.append(wlttb);
	}

	// Loop through 11 different sections of the betting board.
	for(c = 1; c < 12; c++){
		let d = c;
		 // Create a new HTML element for a section of winning lines (e.g., wlrtl_1, wlrtl_2, ...).
		var wlrtl = document.createElement('div');
		wlrtl.setAttribute('id', 'wlrtl_'+c);
		wlrtl.setAttribute('class', 'wlrtl');

		 // Loop through 3 betting blocks within each section.
		for(i = 1; i < 4; i++){
			let j = i;
			 // Create a betting block element for the section.
			var rtlbb = document.createElement('div');
			rtlbb.setAttribute('class', 'rtlbb'+i);

			  // Calculate numbers based on section (d) and index (i).
			var numA = (3 + (3 * (d - 1))) - (j - 1);
			var numB = (6 + (3 * (d - 1))) - (j - 1);

			 // Combine numbers into a string.
			let num = numA + ', ' + numB;

			  // Add an onclick event to set a bet for this betting block.
			rtlbb.onclick = function(){
				setBet(this, num, 'split', 17);
			};

			  // Add an oncontextmenu event to remove a bet for this betting block.
			rtlbb.oncontextmenu = function(e){
				e.preventDefault();
				removeBet(this, num, 'split', 17);
			};
			   // Append the betting block to the section of winning lines.
			wlrtl.append(rtlbb);
		}
		  // Append the section of winning lines to the winning lines element.
		wl.append(wlrtl);
	}
	

	// Loop through 2 different sections of the betting board.
	for(c = 1; c < 3; c++){

		 // Create a new HTML element for a section of winning lines (e.g., wlcb_1, wlcb_2).
		var wlcb = document.createElement('div');
		wlcb.setAttribute('id', 'wlcb_'+c);
		wlcb.setAttribute('class', 'wlcb');

		 // Loop through 11 betting blocks within each section.
		for(i = 1; i < 12; i++){
			let count = (c == 1)? i : i + 11;

			  // Create a betting block element for the section.
			var cbbb = document.createElement('div');
			cbbb.setAttribute('id', 'cbbb_'+count);
			cbbb.setAttribute('class', 'cbbb');

			 // Calculate numbers based on the count and section (c).
			var numA = '2';
			var numB = '3';
			var numC = '5';
			var numD = '6';
			let num = (count >= 1 && count < 12)? (parseInt(numA) + ((count - 1) * 3)) + ', ' + (parseInt(numB)+((count - 1) * 3)) + ', ' + (parseInt(numC)+((count - 1) * 3)) + ', ' + (parseInt(numD)+((count - 1) * 3)) : ((parseInt(numA) - 1) + ((count - 12) * 3)) + ', ' + ((parseInt(numB) - 1)+((count - 12) * 3)) + ', ' + ((parseInt(numC) - 1)+((count - 12) * 3)) + ', ' + ((parseInt(numD) - 1)+((count - 12) * 3));

			 // Define the bet object type.
			var objType = 'corner_bet';

			  // Add an onclick event to set a bet for this betting block.
			cbbb.onclick = function(){
				setBet(this, num, objType, 8);
			};

			// Add an oncontextmenu event to remove a bet for this betting block.
			cbbb.oncontextmenu = function(e){
				e.preventDefault();
				removeBet(this, num, objType, 8);
			};
			   // Append the betting block to the section of winning lines.
			wlcb.append(cbbb);
		}

		 // Append the section of winning lines to the winning lines element.
		wl.append(wlcb);
	}


	// Append the entire betting board to the bettingBoard element.
	bettingBoard.append(wl);


	// Create a section for the top part of the betting board (bbtop).
	let bbtop = document.createElement('div');
	bbtop.setAttribute('class', 'bbtop');

	// Define an array of top block labels.
	let bbtopBlocks = ['1 to 18', '19 to 36'];

	// Loop through the top block labels and create corresponding betting blocks.
	for(i = 0; i < bbtopBlocks.length; i++){
		let f = i;

		  // Create a betting block element (bbtoptwo) for this label.
		var bbtoptwo = document.createElement('div');
		bbtoptwo.setAttribute('class', 'bbtoptwo');

		  // Define numbers and bet object type based on the label.
		let num = (f == 0)? '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18' : '19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36';
		var objType = (f == 0)? 'outside_low' : 'outside_high';

		    // Add an onclick event to set a bet for this betting block.
		bbtoptwo.onclick = function(){
			setBet(this, num, objType, 1);
		};

		  // Add an oncontextmenu event to remove a bet for this betting block.
		bbtoptwo.oncontextmenu = function(e){
			e.preventDefault();
			removeBet(this, num, objType, 1);
		};

		 // Set the text of the betting block to the label.
		bbtoptwo.innerText = bbtopBlocks[i];

		 // Append the betting block to the top part of the betting board.
		bbtop.append(bbtoptwo);
	}
	// Append the top part of the betting board to the betting board.
	bettingBoard.append(bbtop);

	// Create a section for the number board (numberBoard).
	let numberBoard = document.createElement('div');
	numberBoard.setAttribute('class', 'number_board');


	// Create a betting block for the number 0.
	let zero = document.createElement('div');
	zero.setAttribute('class', 'number_0');

	// Define the bet object type and odds for number 0.
	var objType = 'zero';
	var odds = 35;

	// Add an onclick event to set a bet for the number 0.
	zero.onclick = function(){
		setBet(this, '0', objType, odds);
	};

	// Add an oncontextmenu event to remove a bet for the number 0.
	zero.oncontextmenu = function(e){
		e.preventDefault();
		removeBet(this, '0', objType, odds);
	};

	// Create an element to display the number 0.
	let nbnz = document.createElement('div');
	nbnz.setAttribute('class', 'nbn');
	nbnz.innerText = '0';
	zero.append(nbnz);

	// Append the number 0 betting block to the number board.
	numberBoard.append(zero);
	// Define an array of number blocks on the betting board.
	var numberBlocks = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, '2 to 1', 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, '2 to 1', 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, '2 to 1'];

	// Define an array of red number blocks.
	var redBlocks = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

	// Loop through the number blocks and create corresponding HTML elements.
	for(i = 0; i < numberBlocks.length; i++){
		let a = i;

		    // Determine the CSS class for the number block based on whether it's '2 to 1' or a regular number.
		var nbClass = (numberBlocks[i] == '2 to 1')? 'tt1_block' : 'number_block';

		  // Determine the color class (red or black) for the number block.
		var colourClass = (redBlocks.includes(numberBlocks[i]))? ' redNum' : ((nbClass == 'number_block')? ' blackNum' : '');
		   // Create an HTML element for the number block.
		var numberBlock = document.createElement('div');
		numberBlock.setAttribute('class', nbClass + colourClass);

		 // Add an onclick event to set a bet when the number block is clicked.
		numberBlock.onclick = function(){
			if(numberBlocks[a] != '2 to 1'){
				 // Set the bet for the number block.
				setBet(this, ''+numberBlocks[a]+'', 'inside_whole', 35);
			}else{
				 // Determine the numbers and bet type for '2 to 1' blocks.
				num = (a == 12)? '3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36' : ((a == 25)? '2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35' : '1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34');

				   // Set the bet for the '2 to 1' block.
				setBet(this, num, 'outside_column', 2);
			}
			 // The number block is created and configured based on the conditions.
		};

		
		numberBlock.oncontextmenu = function(e){
			e.preventDefault();

			// Add an oncontextmenu event to handle right-click actions for number blocks.
			if(numberBlocks[a] != '2 to 1'){
				  // Remove the bet for the regular number block.
				removeBet(this, ''+numberBlocks[a]+'', 'inside_whole', 35);
			}else{
				   // Determine the numbers and bet type for '2 to 1' blocks.
				num = (a == 12)? '3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36' : ((a == 25)? '2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35' : '1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34');
				  // Remove the bet for the '2 to 1' block.
				removeBet(this, num, 'outside_column', 2);
			}
		};
		// Create an element to display the number in the number block.
		var nbn = document.createElement('div');
		nbn.setAttribute('class', 'nbn');
		nbn.innerText = numberBlocks[i];
		numberBlock.append(nbn);

		// Append the number block to the number board.
		numberBoard.append(numberBlock);
	}
	// Create a section for the betting on dozens board (bo3Board).
	bettingBoard.append(numberBoard);

	let bo3Board = document.createElement('div');
	bo3Board.setAttribute('class', 'bo3_board');	

	// Define an array of dozen blocks.
	let bo3Blocks = ['1 to 12', '13 to 24', '25 to 36'];
	
// Loop through the dozen blocks and create corresponding HTML elements.
	for(i = 0; i < bo3Blocks.length; i++){
		let b = i;

		 // Create an HTML element for the dozen block.
		var bo3Block = document.createElement('div');
		bo3Block.setAttribute('class', 'bo3_block');

		 // Add an onclick event to set a bet for the selected dozen range.
		bo3Block.onclick = function(){
			 // Determine the numbers for the selected dozen range.
			num = (b == 0)? '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12' : ((b == 1)? '13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24' : '25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36');
			  // Set the bet for the selected dozen range.
			setBet(this, num, 'outside_dozen', 2);
		};

		// Add an oncontextmenu event to remove a bet for the selected dozen range.
		bo3Block.oncontextmenu = function(e){
			e.preventDefault();
			  // Determine the numbers for the selected dozen range.
			num = (b == 0)? '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12' : ((b == 1)? '13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24' : '25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36');
			  // Remove the bet for the selected dozen range.
			removeBet(this, num, 'outside_dozen', 2);
		};
		// Set the text of the dozen block to the label.
		bo3Block.innerText = bo3Blocks[i];

		 // Append the dozen block to the betting on dozens board.
		bo3Board.append(bo3Block);
	}

	// Append the betting on dozens board to the betting board.
	bettingBoard.append(bo3Board);

	// Create a section for the outside options board (otoBoard).
	let otoBoard = document.createElement('div');
	otoBoard.setAttribute('class', 'oto_board');	

	// Define an array of outside options blocks.
	let otoBlocks = ['EVEN', 'RED', 'BLACK', 'ODD'];

	// Loop through the outside options blocks and create corresponding HTML elements.
	for(i = 0; i < otoBlocks.length; i++){
		let d = i;

		 // Determine the color class for the RED and BLACK blocks.
		var colourClass = (otoBlocks[i] == 'RED')? ' redNum' : ((otoBlocks[i] == 'BLACK')? ' blackNum' : '');

		 // Create an HTML element for the outside options block.
		var otoBlock = document.createElement('div');
		otoBlock.setAttribute('class', 'oto_block' + colourClass);

		 // Add an onclick event to set a bet for the selected outside option.
		otoBlock.onclick = function(){
			     // Determine the numbers for the selected outside option.
			num = (d == 0)? '2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36' : ((d == 1)? '1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36' : ((d == 2)? '2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35' : '1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35'));
			 // Set the bet for the selected outside option.
			setBet(this, num, 'outside_oerb', 1);
		};

		 // Add an oncontextmenu event to remove a bet for the selected outside option.
		otoBlock.oncontextmenu = function(e){
			 // Determine the numbers for the selected outside option.
			num = (d == 0)? '2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36' : ((d == 1)? '1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36' : ((d == 2)? '2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35' : '1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35'));
			e.preventDefault();
			 // Remove the bet for the selected outside option.
			removeBet(this, num, 'outside_oerb', 1);
		};
		 // Set the text of the outside options block to the label.
		otoBlock.innerText = otoBlocks[i];

		    // Append the outside options block to the outside options board.
		otoBoard.append(otoBlock);
	}
	// Append the outside options board to the betting board.
	bettingBoard.append(otoBoard);
// Create a section for the chip deck (chipDeck).
	let chipDeck = document.createElement('div');

	
// Define an array of chip values and the 'clear' option.
	chipDeck.setAttribute('class', 'chipDeck');
	let chipValues = [1, 5, 10, 100, 'clear'];

	// Loop through the chip values and create corresponding HTML elements.
	for(i = 0; i < chipValues.length; i++){
		let cvi = i;

		// Determine the chip color and set the initial chip as 'blue' and active.
		let chipColour = (i == 0)? 'red' : ((i == 1)? 'blue cdChipActive' : ((i == 2)? 'orange' : ((i == 3)? 'gold' : 'clearBet')));

		    // Create an HTML element for the chip.
		let chip = document.createElement('div');
		chip.setAttribute('class', 'cdChip ' + chipColour);

		 // Add an onclick event to handle chip selection and clearing bets.
		chip.onclick = function(){
			if(cvi !== 4){

				// Clear the 'cdChipActive' class from all chips.
				let cdChipActive = document.getElementsByClassName('cdChipActive');
				for(i = 0; i < cdChipActive.length; i++){
					cdChipActive[i].classList.remove('cdChipActive');
				}

				 // Set the selected chip as 'cdChipActive'.
				let curClass = this.getAttribute('class');
				if(!curClass.includes('cdChipActive')){
					this.setAttribute('class', curClass + ' cdChipActive');
				}

				 // Update the wager based on the selected chip value.
				wager = parseInt(chip.childNodes[0].innerText);
			}else{

				 // Handle clearing bets and returning chips to the bank.
				bankValue = bankValue + currentBet;
				currentBet = 0;

				 // Update the displayed bank and bet values.
				document.getElementById('bankSpan').innerText = '' + bankValue.toLocaleString("en-GB") + '';
				document.getElementById('betSpan').innerText = '' + currentBet.toLocaleString("en-GB") + '';
				clearBet();// Clear bets from the board.
				removeChips();// Remove chips from the board.
			}
		};

		 // Create a span to display the chip value.
		let chipSpan = document.createElement('span');
		chipSpan.setAttribute('class', 'cdChipSpan');
		chipSpan.innerText = chipValues[i];
		chip.append(chipSpan);

		 // Append the chip to the chip deck.
		chipDeck.append(chip);
	}

	// Append the chip deck to the betting board.
	bettingBoard.append(chipDeck);

	// Create a container to display bank and bet values (bankContainer).
	let bankContainer = document.createElement('div');
	bankContainer.setAttribute('class', 'bankContainer');


	// Create an element for displaying the bank value (bank).
	let bank = document.createElement('div');
	bank.setAttribute('class', 'bank');

	// Create a span to show the bank value (bankSpan) and initialize it with the bankValue.
	let bankSpan = document.createElement('span');
	bankSpan.setAttribute('id', 'bankSpan');
	bankSpan.innerText = '' + bankValue.toLocaleString("en-GB") + '';

	// Append the bankSpan to the bank element.
	bank.append(bankSpan);

	// Append the bank element to the bankContainer.
	bankContainer.append(bank);


	// Create an element for displaying the current bet value (bet).
	let bet = document.createElement('div');
	bet.setAttribute('class', 'bet');

	// Create a span to show the bet value (betSpan) and initialize it with the currentBet.
	let betSpan = document.createElement('span');
	betSpan.setAttribute('id', 'betSpan');
	betSpan.innerText = '' + currentBet.toLocaleString("en-GB") + '';

	// Append the betSpan to the bet element.
	bet.append(betSpan);

	// Append the bet element to the bankContainer.
	bankContainer.append(bet);	

	// Append the bankContainer to the betting board.
	bettingBoard.append(bankContainer);


	
// Create a scrollable container for additional content (pnBlock).
	let pnBlock = document.createElement('div');
	pnBlock.setAttribute('class', 'pnBlock');


	// Create a content container that can be scrolled horizontally (pnContent).
	let pnContent = document.createElement('div');
	pnContent.setAttribute('id', 'pnContent');

	// Add a wheel event listener to enable horizontal scrolling within pnContent.
	pnContent.onwheel = function(e){
		e.preventDefault();
		pnContent.scrollLeft += e.deltaY;
	};

	// Append pnContent to pnBlock.
	pnBlock.append(pnContent);	
	// Append pnBlock to the betting board.
	bettingBoard.append(pnBlock);
	
	// Append the betting board to the main container (container).
	container.append(bettingBoard);
}

// Define a function to clear the bet and numbersBet arrays.
function clearBet(){
	bet = [];
	numbersBet = [];
}


// Function to set a bet when a betting element (e) is clicked.
function setBet(e, n, t, o){
	// Store the current wager amount in lastWager and update wager.
	lastWager = wager;
	wager = (bankValue < wager)? bankValue : wager;

	// Check if the wager is greater than 0.
	if(wager > 0){
		 // Check if the spin button does not exist, create it, and attach an event handler for spinning.
		if(!container.querySelector('.spinBtn')){
			let spinBtn = document.createElement('div');
			spinBtn.setAttribute('class', 'spinBtn');
			spinBtn.innerText = 'spin';
			spinBtn.onclick = function(){
				this.remove();
				spin();
			};
			container.append(spinBtn);
		}
		 // Update the bank value and current bet, and display them in their respective elements.
		bankValue = bankValue - wager;
		currentBet = currentBet + wager;
		document.getElementById('bankSpan').innerText = '' + bankValue.toLocaleString("en-GB") + '';
		document.getElementById('betSpan').innerText = '' + currentBet.toLocaleString("en-GB") + '';

		    // Iterate through the bet array to check if the same bet already exists.
		for(i = 0; i < bet.length; i++){
			if(bet[i].numbers == n && bet[i].type == t){
				 // Update the bet amount and the visual representation of the chip.
				bet[i].amt = bet[i].amt + wager;
				let chipColour = (bet[i].amt < 5)? 'red' : ((bet[i].amt < 10)? 'blue' : ((bet[i].amt < 100)? 'orange' : 'gold'));
				e.querySelector('.chip').style.cssText = '';
				e.querySelector('.chip').setAttribute('class', 'chip ' + chipColour);
				let chipSpan = e.querySelector('.chipSpan');
				chipSpan.innerText = bet[i].amt;
				return;
			}
			// If the bet doesn't exist, it's added to the bet array.
		}

		// Create an object to represent the bet with its attributes.   
		var obj = {
			amt: wager, // The bet amount.
			type: t, // The bet type (e.g., 'inside_whole', 'outside_column').
			odds: o, // The odds associated with the bet.
			numbers: n // The numbers where the bet is placed.
		};
		// Add the bet object to the bet array.
		bet.push(obj);
		
		// Split the 'n' string into an array of numbers and convert them to actual numbers.
		let numArray = n.split(',').map(Number);
		for(i = 0; i < numArray.length; i++){

			    // Check if the number is not already in the numbersBet array and add it if not.
			if(!numbersBet.includes(numArray[i])){
				numbersBet.push(numArray[i]);
			}
		}


		// Check if the betting element does not have a chip representation, create one.
		if(!e.querySelector('.chip')){
			// Determine the chip color based on the wager amount.
			let chipColour = (wager < 5)? 'red' : ((wager < 10)? 'blue' : ((wager < 100)? 'orange' : 'gold'));

			 // Create a chip element and set its class and text based on the chipColour and wager.
			let chip = document.createElement('div');
			chip.setAttribute('class', 'chip ' + chipColour);
			let chipSpan = document.createElement('span');
			chipSpan.setAttribute('class', 'chipSpan');
			chipSpan.innerText = wager;
			chip.append(chipSpan);

			    // Append the chip to the betting element to visually represent the bet.
			e.append(chip);
		}
	}
}

function spin(){
	// Generate a random winning spin number between 0 and 36.
	var winningSpin = Math.floor(Math.random() * 37);

	// Call the function to visually spin the wheel to the winning spin.
	spinWheel(winningSpin);

	// Delay execution after the spin for 10 seconds.
	setTimeout(function(){
		 // Check if the winning spin is among the numbers the player has bet on.
		if(numbersBet.includes(winningSpin)){
			let winValue = 0;
			let betTotal = 0;
			  // Loop through the bets to calculate the winnings for each winning bet.
			for(i = 0; i < bet.length; i++){
				 // Split the comma-separated numbers string into an array of numbers.
				var numArray = bet[i].numbers.split(',').map(Number);
				 // Check if the winning spin is included in the numbers of the bet.
				if(numArray.includes(winningSpin)){
					// Update the bankValue with the winning amount.
					bankValue = (bankValue + (bet[i].odds * bet[i].amt) + bet[i].amt);
					winValue = winValue + (bet[i].odds * bet[i].amt);
					betTotal = betTotal + bet[i].amt;
				}
			}
			 // Call the win function to display the win details.
			win(winningSpin, winValue, betTotal);
		}
		 // Reset the currentBet to 0 and update the bankValue and betSpan accordingly.
		currentBet = 0;
		document.getElementById('bankSpan').innerText = '' + bankValue.toLocaleString("en-GB") + '';
		document.getElementById('betSpan').innerText = '' + currentBet.toLocaleString("en-GB") + '';
		
		 // Determine the color of the winning number for display.
		let pnClass = (numRed.includes(winningSpin))? 'pnRed' : ((winningSpin == 0)? 'pnGreen' : 'pnBlack');
		let pnContent = document.getElementById('pnContent');
		let pnSpan = document.createElement('span');
		pnSpan.setAttribute('class', pnClass);
		pnSpan.innerText = winningSpin;
		pnContent.append(pnSpan);

		// Scroll the result display to show the latest winning number.
		pnContent.scrollLeft = pnContent.scrollWidth;


		 // Reset the bet and numbersBet arrays, remove chips, and set wager to the last wager amount.
		bet = [];
		numbersBet = [];
		removeChips();
		wager = lastWager;
		 // Check if the game is over (bankValue is 0 and currentBet is 0).
		if(bankValue == 0 && currentBet == 0){
			gameOver();
		}
	}, 10000);// 10-second delay after the spin.
}

function win(winningSpin, winValue, betTotal){
	if(winValue > 0){
		 // Create a notification element to display the win result.
		let notification = document.createElement('div');
		notification.setAttribute('id', 'notification');

		 // Create a container for the notification content.
			let nSpan = document.createElement('div');
			nSpan.setAttribute('class', 'nSpan');

			 // Create a span to display the winning number with the appropriate color.
				let nsnumber = document.createElement('span');
				nsnumber.setAttribute('class', 'nsnumber');

				 // Set the text color based on whether the winning number is red or black.
				nsnumber.style.cssText = (numRed.includes(winningSpin))? 'color:red' : 'color:black';
				nsnumber.innerText = winningSpin;
				nSpan.append(nsnumber);

				 // Add a " Win" text to indicate the win.
				let nsTxt = document.createElement('span');
				nsTxt.innerText = ' Win';
				nSpan.append(nsTxt);

				// Create a section to display details about the bet and win.
				let nsWin = document.createElement('div');
				nsWin.setAttribute('class', 'nsWin');

				 // Create blocks to display individual information within the win section.
					let nsWinBlock = document.createElement('div');
					nsWinBlock.setAttribute('class', 'nsWinBlock');
					nsWinBlock.innerText = 'Bet: ' + betTotal;
					nSpan.append(nsWinBlock);
					nsWin.append(nsWinBlock);
					nsWinBlock = document.createElement('div');
					nsWinBlock.setAttribute('class', 'nsWinBlock');
					nsWinBlock.innerText = 'Win: ' + winValue;
					nSpan.append(nsWinBlock);
					nsWin.append(nsWinBlock);
					nsWinBlock = document.createElement('div');
					nsWinBlock.setAttribute('class', 'nsWinBlock');
					nsWinBlock.innerText = 'Payout: ' + (winValue + betTotal);
					nsWin.append(nsWinBlock);

					// Add the win content to the notification.
				nSpan.append(nsWin);
			notification.append(nSpan);

			 // Prepend the notification to the container.
		container.prepend(notification);
		 // Set a timeout to fade out the notification after 3 seconds.
		setTimeout(function(){
			notification.style.cssText = 'opacity:0';
		}, 3000);

		  // Set a timeout to remove the notification after 4 seconds.
		setTimeout(function(){
			notification.remove();
		}, 4000);
	}
}

function removeBet(e, n, t, o){
	 // Ensure that the minimum wager is set to 100 if it's currently 0.
	wager = (wager == 0)? 100 : wager;
	for(i = 0; i < bet.length; i++){
		if(bet[i].numbers == n && bet[i].type == t){
			if(bet[i].amt != 0){
				  // Calculate the amount to be removed from the bet, which is either the current wager or the remaining bet amount, whichever is smaller.
				wager = (bet[i].amt > wager)? wager : bet[i].amt;

				 // Reduce the bet amount.
				bet[i].amt = bet[i].amt - wager;

				 // Increase the bank value with the removed wager.
				bankValue = bankValue + wager;

				  // Decrease the current bet with the removed wager.
				currentBet = currentBet - wager;

				  // Update the displayed bank and bet values.
				document.getElementById('bankSpan').innerText = '' + bankValue.toLocaleString("en-GB") + '';
				document.getElementById('betSpan').innerText = '' + currentBet.toLocaleString("en-GB") + '';

				 // If the bet amount is reduced to 0, hide the chip.
				if(bet[i].amt == 0){
					e.querySelector('.chip').style.cssText = 'display:none';
				}else{

					 // Update the chip color and amount text.
					let chipColour = (bet[i].amt < 5)? 'red' : ((bet[i].amt < 10)? 'blue' : ((bet[i].amt < 100)? 'orange' : 'gold'));
					e.querySelector('.chip').setAttribute('class', 'chip ' + chipColour);
					let chipSpan = e.querySelector('.chipSpan');
					chipSpan.innerText = bet[i].amt;
				}
			}
		}
	}
 // If the current bet becomes 0 and a spin button is present, remove the spin button.
	if(currentBet == 0 && container.querySelector('.spinBtn')){
		document.getElementsByClassName('spinBtn')[0].remove();
	}
}
  // Calculate the degree of rotation for the winning number based on its position in the array.
function spinWheel(winningSpin){
	for(i = 0; i < wheelnumbersAC.length; i++){
		if(wheelnumbersAC[i] == winningSpin){
			var degree = (i * 9.73) + 362;
		}
	}
	 // Apply animations for the wheel and ball track to simulate spinning.
	wheel.style.cssText = 'animation: wheelRotate 5s linear infinite;';
	ballTrack.style.cssText = 'animation: ballRotate 1s linear infinite;';

	 // Set a timeout to create a new CSS keyframe animation for ball stopping.
	setTimeout(function(){
		ballTrack.style.cssText = 'animation: ballRotate 2s linear infinite;';
		style = document.createElement('style');
		style.type = 'text/css';
		style.innerText = '@keyframes ballStop {from {transform: rotate(0deg);}to{transform: rotate(-'+degree+'deg);}}';
		document.head.appendChild(style);
	}, 2000);

	 // Set timeouts to control the ball stopping and wheel rotation animation.
	setTimeout(function(){
		ballTrack.style.cssText = 'animation: ballStop 3s linear;';
	}, 6000);
	setTimeout(function(){
		ballTrack.style.cssText = 'transform: rotate(-'+degree+'deg);';
	}, 9000);
	setTimeout(function(){
		wheel.style.cssText = '';
		style.remove();
	}, 10000);
}

function removeChips(){
	var chips = document.getElementsByClassName('chip');
	if(chips.length > 0){
		for(i = 0; i < chips.length; i++){
			chips[i].remove();
		}
		removeChips();
	}
}
