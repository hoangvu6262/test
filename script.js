const game = () => {
	let pScore = 0;
	let cScore = 0;

	const startGame = () => {
		const playGame = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playGame.addEventListener("click", () => {
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};


	const playMatch = () => {
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.playerHand');
		const computerHand = document.querySelector('.computerHand');
		const hands = document.querySelectorAll('.hands img');

		hands.forEach(hand => {
			hand.addEventListener('animationend', function(){
				this.style.animation = '';
			});
		});

		const computerOptions = ["rock", "paper", "scissors"];

		options.forEach(option => {
			option.addEventListener("click", function() {
				const computerNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[computerNumber];


				playerHand.src = "./assets/rock.png";
				computerHand.src = "./assets/rock.png";

				setTimeout(() =>{
					compareHand(this.textContent, computerChoice);

					//update image hand
					playerHand.src = `./assets/${this.textContent}.png`;
					computerHand.src = `./assets/${computerChoice}.png`;
				},2000);

				playerHand.style.animation = 'shakePlayer 2s ease'
				computerHand.style.animation = 'shakeComputer 2s ease'
			});
		});

	};

	const updateScore = () => {
		const playerScore = document.querySelector('.playerScores p');
		const computerScore = document.querySelector('.computerScores p');

		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	const compareHand = (playerChoice, computerChoice) => {
		const winner = document.querySelector('.winner');

		if(playerChoice === computerChoice){
			winner.textContent = 'It is a tie';
			return;
		}

		//ckeck Rock hand
		if(playerChoice === 'rock')
		{
			if(computerChoice === 'scissors'){
				winner.textContent = 'Player Win!!';
				pScore++;
				updateScore();
				return;
			}else{
				winner.textContent = 'Computer Win!!';
				cScore++;
				updateScore();
				return;
			}
		}

		//check cissor
		if(playerChoice === 'scissors')
		{
			if(computerChoice === 'paper'){
				winner.textContent = 'player Win!!';
				pScore++;
				updateScore();
				return;
			}else{
				winner.textContent = 'Computer Win!!';
				cScore++;
				updateScore();
				return;
			}
		}

		//check paper
		if(playerChoice === 'paper')
		{
			if(computerChoice === 'rock'){
				winner.textContent = 'Player Win!!';
				pScore++;
				updateScore();
				return;
			}else{
				winner.textContent = 'Computer Win!!';
				cScore++;
				updateScore();
				return;
			}
		}
	};

	startGame();
	playMatch();

};

game();
