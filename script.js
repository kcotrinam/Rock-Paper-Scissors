const options = ["rock", "paper", "scissors"]
const imagesPlayerOption = ["img/right-rock.png", "img/right-paper.png", "img/right-scissors.png"],
      imagesComputerOtion = ["img/left-rock.png", "img/left-paper.png", "img/left-scissors.png"]
const playerOptions = Array.from(document.querySelectorAll('.img-item'))

let playerAttempt = document.querySelector('#player-choice'),
    pcAttempt = document.querySelector('#pc-choice')

let result = document.getElementById('result')
let acumPcScore = document.querySelector('#pc-score'),
    acumPlayerScore = document.querySelector('#player-score')

let playerChoice,
    computerChoice

let playerScore = 0,
    computerScore = 0


let totalPlays = 0

const random = options => options[Math.floor(Math.random() * options.length)]

const showComputerChoice = () => {
let temp = random(options)
  if(temp === 'rock') {
    pcAttempt.src = "img/left-rock.png"
    computerChoice = temp
  }else if(temp === 'paper') {
    pcAttempt.src = "img/left-paper.png"
    computerChoice = temp
  }else {
    pcAttempt.src = "img/left-scissors.png"
    computerChoice = temp
  }
}

const playround = (playerSelection, computerSelection) => {
    if(playerSelection === 'rock'){
      if(computerSelection === 'rock'){
        return 'It is a tie, please play again'
      }else if(computerSelection === 'paper'){
        return 'You lose!'
      }else{
        return 'You win!'
      } 
    }else if(playerSelection === 'paper'){
      if(computerSelection === 'rock'){
        return 'You win!'
      } 
      else if(computerSelection === 'paper'){
        return 'It is a tie, please play again'
      }else{
        return 'You lose!'
      } 
    }else {
      if(computerSelection === 'rock'){
        return 'You lose!'
      } 
      else if(computerSelection === 'paper'){
        return 'You win!'
      } 
      else{
        return 'It is a tie, please play again'
      } 
    }
}

const getAcumScore = (result) => {
  if(result === 'You win!'){
    return playerScore++
  }else if(result == 'You lose!'){
  return computerScore++
  }
}

const showScore = () => {
  acumPlayerScore.textContent = `${playerScore}`
  acumPcScore.textContent = `${computerScore}`
}


const showWinner = () => {
  if(totalPlays === 10){
    if(playerScore > computerScore) result.textContent = "YOU WIN!"
    else if(computerScore > playerScore) result.textContent = "YOU LOSE!"
    else result.textContent = "It is a tie!"
  }
}

playerOptions.map((opt, i) => {
  opt.addEventListener('click', e => {
    playerAttempt.src = `${imagesPlayerOption[i]}`
    playerChoice = e.target.alt
    showComputerChoice()
    
    if(totalPlays <= 10){
      totalPlays++
      getAcumScore(playround(playerChoice, computerChoice))
      showScore()
      showWinner()
    }
  })
})