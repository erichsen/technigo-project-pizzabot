// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Eclerk Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
// User name input
let userInput = prompt('What is your name?')
alert(`Hello ${userInput}, nice to meet you! Let's get started with your order.`)

// Step 2 - Food choice
// Food options
let foodChoice = "Please choose a dish by number:\n1. Pizza\n2. Pasta\n3. Salad"

let choice = prompt(foodChoice)

switch (choice) {
  case '1':
    foodChoice = 'Pizza'
    break
  case '2':
    foodChoice = 'Pasta'
    break
  case '3':
    foodChoice = 'Salad'
    break
  default:
    foodChoice = 'Pizza' // Default choice
    alert('Invalid choice, defaulting to Pizza.')
}

alert(`Great choice! You selected: ${foodChoice}.`)

// Step 3 - Subtype choice
// Subtype options based on food choice
let subtypeChoice = ''

if (foodChoice === 'Pizza') {
  let pizzaOptions = "Choose a type of Pizza:\n1. Margherita\n2. Pepperoni\n3. Veggie"
  let pizzaChoice = prompt(pizzaOptions)
  switch (pizzaChoice) {
    case '1':
      subtypeChoice = 'Margherita'
      break
    case '2':
      subtypeChoice = 'Pepperoni'
      break
    case '3':
      subtypeChoice = 'Veggie'
      break
    default:
      subtypeChoice = 'Margherita' // Default choice
      alert('Invalid choice, defaulting to Margherita.')
  }
} else if (foodChoice === 'Pasta') {
  let pastaOptions = "Choose a type of Pasta:\n1. Spaghetti\n2. Fettuccine\n3. Penne"
  let pastaChoice = prompt(pastaOptions)
  switch (pastaChoice) {
    case '1':
      subtypeChoice = 'Spaghetti'
      break
    case '2':
      subtypeChoice = 'Fettuccine'
      break
    case '3':
      subtypeChoice = 'Penne'
      break
    default:
      subtypeChoice = 'Spaghetti' // Default choice
      alert('Invalid choice, defaulting to Spaghetti.')
  }
} else if (foodChoice === 'Salad') {
  let saladOptions = "Choose a type of Salad:\n1. Caesar\n2. Greek\n3. Garden"
  let saladChoice = prompt(saladOptions)
  switch (saladChoice) {
    case '1':
      subtypeChoice = 'Caesar'
      break
    case '2':
      subtypeChoice = 'Greek'
      break
    case '3':
      subtypeChoice = 'Garden'
      break
    default:
      subtypeChoice = 'Caesar' // Default choice
      alert('Invalid choice, defaulting to Caesar.')
  }
}

alert(`You selected: ${subtypeChoice}.`)

// Step 4 - Age
// Age input and validation
let age = prompt('Please enter your age:')
if (age < 18) {
  alert('Note: As you are under 18, please ensure you have parental consent for this order.')
} else {
  alert('Thank you for confirming your age.')
}

// Step 5 - Order confirmation
// Final confirmation message
alert(`Thank you for your order, ${userInput}! You ordered a ${subtypeChoice} and are ${age} years old.`)
