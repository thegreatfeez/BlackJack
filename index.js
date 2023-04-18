let player = {
  name: "shikamaru",
  chip: 200
}
let cards  = []
let sum = 0
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name +": $"+player.chip

function getRandomCard(){
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10){
    return 10
  } else if (randomNumber === 1){
    return 11
  } else {
    return randomNumber
  }
}

function startGame(){
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards  = [firstCard, secondCard]
let sum = firstCard + secondCard
  renderGame()
}

function renderGame(){
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++){
  cardsEl.textContent += cards[i] + " " 
}
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20){
    message ="Draw a new card"
  }else if (sum === 21){
    message = "you've hit blackjack"
    hasBlackjack = true
  }else {
    message = "you are out of the game"
    isAlive = false
  }

  messageEl.textContent = message
}

function newCard(){
  if (hasBlackjack === false && isAlive === true){
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
}
}