const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if  (userInput === 'rock') {
      return userInput;
    } else if (userInput === 'paper') {
      return userInput;
    } else if (userInput === 'scissors') {
      return userInput;
    } else if (userInput === 'lizard') {
        return userInput;
    } else if (userInput === 'spock') {
        return userInput;
    } else {
    console.log('Invalid answer, try better');
  }
  };
  
  
  
  const getComputerChoice = () => {
      const randomNumber = Math.floor(Math.random()*5);
      switch (randomNumber) {
        case 0 : 
          return 'rock'; 
          
        case 1 : 
          return 'paper';
         
        case 2 : 
          return 'scissors';
          
        case 3 : 
          return 'lizard';
          
        case 4 : 
          return 'spock';
          
      }
    };
  
    //another version:
  //   const getComputerChoice = () => {
  //     const randomNumber = Math.floor(Math.random()*3);
  // if (randomNumber === 0) {
  //   return 'rock';
  // } else if (randomNumber === 1) {
  //   return 'paper';
  // } else if (randomNumber === 2) {
  //   return 'scissors';
  // } else if (randomNumber === 3) {
  //   return 'lizard';
  // } else if (randomNumber === 4) {
  //   return 'spock';
  // }; 
  // }
  
    
//    console.log(getComputerChoice());
//    console.log(getComputerChoice());
//    console.log(getComputerChoice());
//    console.log(getComputerChoice());

  
  
  //determining the Winner, no arrow just to do it another way
//the longer but more complicated path for practising writing code

  //let humanWins = 'Ahhh, you won, damn human!';
  //let compWins = 'I won, hahaha!';
  
//   const determineWinner = (userChoice, computerChoice) => {
//     if (userChoice === computerChoice) {
//       return 'It\'s a tie!';
//       } else if (userChoice === 'rock' && computerChoice === 'paper') {
//         return compWins;
//       } else if  (userChoice === 'rock' && computerChoice === 'scissors'){
//         return humanWins;
//       }  else if  (userChoice === 'rock' && computerChoice === 'lizard'){
//         return humanWins;
//       } else if  (userChoice === 'rock' && computerChoice === 'spock'){
//         return compWins;
//       } else if  (userChoice === 'paper' && computerChoice === 'rock'){
//         return humanWins;
//       } else if  (userChoice === 'paper' && computerChoice === 'scissors'){
//         return compWins;
//       } else if  (userChoice === 'paper' && computerChoice === 'lizard'){
//         return compWins;
//       } else if  (userChoice === 'paper' && computerChoice === 'spock'){
//         return humanWins;
//       } else if  (userChoice === 'scissors' && computerChoice === 'paper'){
//         return humanWins;
//       } else if  (userChoice === 'scissors' && computerChoice === 'rock'){
//         return compWins;
//       } else if  (userChoice === 'scissors' && computerChoice === 'lizard'){
//         return humanWins;
//       } else if  (userChoice === 'scissors' && computerChoice === 'spock'){
//         return compWins;
//       } else if  (userChoice === 'lizard' && computerChoice === 'rock'){
//         return compWins;
//       } else if  (userChoice === 'lizard' && computerChoice === 'paper'){
//         return humanWins;
//       } else if  (userChoice === 'lizard' && computerChoice === 'scissors'){
//         return compWins;
//       } else if  (userChoice === 'lizard' && computerChoice === 'spock'){
//         return humanWins;
//       } else if  (userChoice === 'spock' && computerChoice === 'rock'){
//         return humanWins;
//       }  else if  (userChoice === 'spock' && computerChoice === 'paper'){
//         return compWins;
//       } else if  (userChoice === 'spock' && computerChoice === 'scissors'){
//         return humanWins;
//       } else if  (userChoice === 'spock' && computerChoice === 'lizard'){
//         return compWins;
//       };
//   }
  
  // console.log(determineWinner('scissors','rock'))
  // console.log(determineWinner('rock','rock'))
  // console.log(determineWinner('paper','rock'))
  
  //another version, nested if

  let winnerIsUser = 'Ahhh, you won, damn human!';
  let winnerIsComputer = 'I won, hahaha!';
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
      }
  
    if (userChoice === 'rock'){
      if (computerChoice === 'paper' || computerChoice === 'spock' ) {
        return  winnerIsComputer;
      } else {
        return winnerIsUser;
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors' || computerChoice === 'lizard') {
        return winnerIsComputer;
      } else {
        return winnerIsUser;
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock' || computerChoice === 'spock') {
        return winnerIsComputer;
      } else {
        return winnerIsUser;
      }
    }

     if (userChoice === 'lizard') {
        if (computerChoice === 'rock' || computerChoice === 'scissors') {
          return winnerIsComputer;
        } else {
          return winnerIsUser;
        }
      }

   if (userChoice === 'spock') {
        if (computerChoice === 'paper' || computerChoice === 'lizard') {
          return winnerIsComputer;
        } else {
          return winnerIsUser;
        }
      }
  };
  //console.log(determineWinner('paper','rock'))
  
  
  
  const playGame = () => {
    const userChooses = getUserChoice('lizard'); 
    const computerChooses = getComputerChoice();
    console.log('Your choice: ' + userChooses);
    console.log('I\'m choosing: ' + computerChooses);
  
    console.log(determineWinner(userChooses, computerChooses));
  };
  
  playGame ();
  
  
  

