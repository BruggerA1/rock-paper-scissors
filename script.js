/* Screen Declarations */
let menuScreen = document.getElementById('main-menu');
let endScreen = document.getElementById('end-game');
let gameScreen = document.getElementById('game-screen');

/* Main Menu Config */

let newGameButton = document.getElementById('button-newgame');

newGameButton.onclick = () => {
	menuScreen.style.display = 'none';
	gameScreen.style.display = 'block';
	newGame();
};

/* Main Menu Modal Config */
let modalWindow = document.getElementById('modal-menu-window');
let modalClose = document.getElementById('modal-menu-close');
let howToPlayButton = document.getElementById('button-howto');
let howToVideo = document.getElementById('howto-video');

howToPlayButton.onclick = () => {
	modalWindow.style.position = 'fixed';
	howToVideo.src = 'https://www.youtube.com/embed/x5Q6-wMx-K8';
};

modalClose.onclick = () => {
	modalWindow.style.position = 'static';
	howToVideo.src = '';
};

/* Game Screen Config */

/* Initialize Scores */
let playerScore;
let computerScore;

let showPlayerScore = document.getElementById('score-player-points');

let showComputerScore = document.getElementById('score-computer-points');

let showRoundResult = document.getElementById('round-result');


/* Initialize Player Icons */
let playerRock = document.getElementById('player-icon-rock');
let playerPaper = document.getElementById('player-icon-paper');
let playerScissors = document.getElementById('player-icon-scissors');
let playerLizard = document.getElementById('player-icon-lizard');
let playerSpock = document.getElementById('player-icon-spock');

/* Initialize Computer Icons */
let computerRock = document.getElementById('computer-icon-rock');
let computerPaper = document.getElementById('computer-icon-paper');
let computerScissors = document.getElementById('computer-icon-scissors');
let computerLizard = document.getElementById('computer-icon-lizard');
let computerSpock = document.getElementById('computer-icon-spock');

/* Game Functions */
let move;

function newGame() {
	playerScore = computerScore = 0;
	showPlayerScore.innerHTML = playerScore;
	showComputerScore.innerHTML = computerScore;
	showRoundResult.innerHTML = "";
}

function playerTurn(move){
	return move;
}

function computerTurn() {
	let move = Math.floor((Math.random() * 5) + 1);
	
	switch(move) {
		case 1:
			return 'Rock';
			break;
		case 2:
			return 'Paper';
			break;
		case 3:
			return 'Scissors';
			break;
		case 4:
			return 'Lizard';
			break;
		case 5:
			return 'Spock';
			break;
	}
}

function playMatch(playerTurn, computerTurn){
	switch(playerTurn) {
		case 'Rock':
			switch(computerTurn){
				case 'Rock':
					showRoundResult.innerHTML = `TIE!
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Tie';
					break;
				case 'Paper':
					showRoundResult.innerHTML = `YOU LOSE! Paper Covers Rock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Scissors':
					showRoundResult.innerHTML = `YOU WIN! Rock Crushes Scissors.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Lizard':
					showRoundResult.innerHTML = `YOU WIN! Rock Bashes Lizard.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Spock':
					showRoundResult.innerHTML = `YOU LOSE! Spock Vaporizes Rock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				}
			break;
		case 'Paper':
			switch(computerTurn){
				case 'Rock':
					showRoundResult.innerHTML = `YOU WIN! Paper Covers Rock.
					Player: ${playerTurn}.
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Paper':
					showRoundResult.innerHTML = `TIE!
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Tie';
					break;
				case 'Scissors':
					showRoundResult.innerHTML = `YOU LOSE! Scissors Cuts Paper.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Lizard':
					showRoundResult.innerHTML = `YOU LOSE! Lizard Eats Paper.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Spock':
					showRoundResult.innerHTML = `YOU WIN! Paper Disproves Spock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
			}
			break;
		case 'Scissors':
			switch(computerTurn){
				case 'Rock':
					showRoundResult.innerHTML = `YOU LOSE! Rock Crushes Scissors.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Paper':
					showRoundResult.innerHTML = `YOU WIN! Scissors Cuts Paper.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Scissors':
					showRoundResult.innerHTML = `TIE!
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Tie';
					break;
				case 'Lizard':
					showRoundResult.innerHTML = `YOU WIN! Scissors Decapitates Lizard.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Spock':
					showRoundResult.innerHTML = `YOU LOSE! Spock Smashes Scissors.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
			}
			break;
		case 'Lizard':
			switch(computerTurn){
				case 'Rock':
					showRoundResult.innerHTML = `YOU LOSE! Rock Bashes Lizard.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Paper':
					showRoundResult.innerHTML = `YOU WIN! Lizard eats Paper.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Scissors':
					showRoundResult.innerHTML = `YOU LOSE! Scissors Decapitates Lizard.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Lizard':
					showRoundResult.innerHTML = `TIE!
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Tie';
					break;
				case 'Spock':
					showRoundResult.innerHTML = `YOU WIN! izard Poisons Spock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
	
			}
			break;
		case 'Spock':
			switch(computerTurn){
				case 'Rock':
					showRoundResult.innerHTML = `YOU WIN! Spock Vaporizes Rock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Paper':
					showRoundResult.innerHTML = `YOU LOSE! Paper disproves Spock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Scissors':
					showRoundResult.innerHTML = `YOU WIN! Spock Smashes Scissors.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Lizard':
					showRoundResult.innerHTML = `YOU LOSE! Lizard Poisons Spock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Spock':
					showRoundResult.innerHTML = `TIE!
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Tie';
					break;
			}
			break;
	}
}

function evalResult(result){
	switch(result) {
		case 'Win':
			playerScore++;
			showPlayerScore.innerHTML = playerScore;
			if (playerScore >= 5){
				gameOver();
				document.getElementById("end-result").innerHTML = 'YOU WIN';
			}
			break;
		case 'Lose':
			computerScore++;
			showComputerScore.innerHTML = computerScore;
			if (computerScore >= 5){
				gameOver();
				document.getElementById("end-result").innerHTML = 'YOU LOSE... 😂';

			}
			break;
		case 'Tie':
			break;
	}
}

function gameOver(){
	gameScreen.style.display = 'none';
	endScreen.style.display = 'block';
}

/* Icon Click */
playerRock.onclick = () => {
	result = playMatch(playerTurn('Rock'),computerTurn());
	evalResult(result);
}

playerPaper.onclick = () => {
	result = playMatch(playerTurn('Paper'),computerTurn());
	evalResult(result);
}

playerScissors.onclick = () => {
	result = playMatch(playerTurn('Scissors'),computerTurn());
	evalResult(result);
}

playerLizard.onclick = () => {
	result = playMatch(playerTurn('Lizard'),computerTurn());
	evalResult(result);
}

playerSpock.onclick = () => {
	result = playMatch(playerTurn('Spock'),computerTurn());
	evalResult(result);
}

// End Game Delcaration
let mainMenu = document.getElementById("end-button-menu");

mainMenu.onclick = () => {
	endScreen.style.display="none";
	menuScreen.style.display="block";
}