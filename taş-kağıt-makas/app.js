
const computerChoiceDisplay= document.querySelector('#computer-choice')
const userChoiceDisplay = document.querySelector('#user-choice')
const resultDisplay = document.querySelector('#result')
const possibleChoice = document.querySelectorAll('button')
const resetTusu = document.querySelector('#resetTusu')


let userChoice
let computerChoice
let result


possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML= userChoice
generateComputerChoice ()
getResult()



}))

function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1

  if(randomNumber === 1){
    computerChoice = 'taş'
  }
  if(randomNumber === 2){
    computerChoice = 'kağıt'
  }
  if(randomNumber === 3){
    computerChoice = 'makas'
  }
  
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult (){
  if(computerChoice === userChoice){
    result = ' Berabere !'
  }

  if(computerChoice === 'taş' && userChoice === 'kağıt'){
    result = ' Kazandın! :)'
  }
  
  if(computerChoice === 'taş' && userChoice === 'makas'){
    result = ' Kaybettin! ): '
  }
 
  if(computerChoice === 'kağıt' && userChoice === 'makas'){
    result = ' Kazandın! :)'
  }
  if(computerChoice === 'kağıt' && userChoice === 'taş'){
    result = ' Kaybettin! ): '
  }

  if(computerChoice === 'makas' && userChoice === 'taş'){
    result = 'Kazandın! :)'
  }
  
  if(computerChoice === 'makas' && userChoice === 'kağıt'){
    result = ' Kaybettin! ): '
  }

  resultDisplay.innerHTML = result
  
  

}

resetTusu.addEventListener('click', () => {
  


})