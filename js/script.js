 {
  const playGame = (playerInput) => {
    clearMessages();

    const getMoveName = (argMoveId) => {
      if (argMoveId === 1) {
        return 'kamień';
      } else if (argMoveId === 2) {
        return 'papier';
      } else if (argMoveId === 3) {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    };

    const displayResult = (argComputerMove, argPlayerMove) => {
      console.log('moves:', argComputerMove, argPlayerMove);
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if (argComputerMove === argPlayerMove) {
        printMessage('Remis!');
      } else if (
        (argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
        (argComputerMove === 'papier' && argPlayerMove === 'nożyce') ||
        (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')
      ) {
        printMessage('Ty wygrywasz!');
      } else if (argPlayerMove === 'nieznany ruch') {
        printMessage('Nieprawidłowy ruch!');
      } else {
        printMessage('Komputer wygrywa!');
      }
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
  };

  document.getElementById('play-rock').addEventListener('click', () => playGame(1));
  document.getElementById('play-paper').addEventListener('click', () => playGame(2));
  document.getElementById('play-scissors').addEventListener('click', () => playGame(3));
};