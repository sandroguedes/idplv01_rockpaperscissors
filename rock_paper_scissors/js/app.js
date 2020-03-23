var choices = ['rock', 'paper', 'scissors'];
var computers_choice;
var players_choice;
var player_lives = 3;
var computer_lives = 3;
var message_area = document.getElementById('game_area');
var clearArea = false;

document
  .getElementById('playGame')
  .addEventListener('click', runGame);

function runGame() {
  if (clearArea) {
    message_area.innerHTML = '';
    }

  clearArea = false;

  message_area.innerHTML += '******************<br />';
  message_area.innerHTML += 'Computer lives: ' + computer_lives + '<br />';
  message_area.innerHTML += 'Player lives: '+ player_lives + '<br />';
  message_area.innerHTML += 'Choose your weapon!<br />';
  message_area.innerHTML += '******************<br />';

  var players_choices = document.getElementById('gameOption');
  players_choice = players_choices.options[players_choices.selectedIndex].value;
  computers_choice = choices[Math.floor(Math.random() * choices.length)];

  message_area.innerHTML += '******************<br />';
  message_area.innerHTML += 'Computer chose: ' + computers_choice + '<br />';
  message_area.innerHTML += 'Player chose: ' + players_choice + '<br />';
  message_area.innerHTML += '******************<br />';

  if (players_choice == computers_choice) {
    window.alert("Tie! No one wins, play again.")
    message_area.innerHTML += 'Tie! No one wins, play again.<br />';
  } else if (players_choice == 'rock') {
    checkComputerWins('paper', 'covers', 'smashes');
  } else if (players_choice == 'paper') {
    checkComputerWins('scissors', 'cuts', 'covers');
  } else if (players_choice == 'scissors') {
    checkComputerWins('rock', 'smashes', 'cuts');
  } else {
     window.alert("Well that's not a valid choice")
    message_area.innerHTML += "Well that's not a valid choice<br />";
  }

  checkStatus();
}

function checkComputerWins(validateChoice, winMessage, loseMessage) {
  if (computers_choice == validateChoice) {
    window.alert("You Lose!")
    message_area.innerHTML += 'You lose! ' + computers_choice + ' ' + winMessage + ' ' + players_choice + '<br />';
    player_lives = player_lives - 1;
  } else {
    window.alert("You Win!")
    message_area.innerHTML += 'You win! ' + players_choice + ' ' + loseMessage + ' ' + computers_choice + '<br />';
    computer_lives = computer_lives - 1;
  }
}

function checkStatys() {
  if (player_lives == 0) {
    showWinLoseMessage("lost");
  } else if (computer_lives == 0) {
    showWinLoseMessage("won");
  } else {
    message_area.innerHTML += 'Select another choice!<br />';
    message_area.innerHTML += '************* <br />';
  }
}

function showWinLoseMessage(status) {
  message_area.innerHTML += '******************<br />';
  window.alert("GAME OVER.")
  message_area.innerHTML += 'GAME OVER.<br />';
  message_area.innerHTML += '******************<br />';
  window.alert('You ' + status + '! Would you like to play again?')
  message_area.innerHTML += 'You ' + status + '! Would you like to play again?<br />';
  clearArea = true;
}