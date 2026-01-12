// Start here

// Step 1 - Welcome and introduction
alert(`Welcome to our Eclerk Pizzeria. Ready to Start? - Click 'OK' to begin.`)

// User name input
let userInput = prompt('What is your name?')
alert(`Hello ${userInput}, nice to meet you! Let's get started with your order.`)


// Step 2 - Food choice
let foodChoice = "Please choose a dish by number:\n1. Pizza (120 kr)\n2. Pasta (100 kr)\n3. Salad (90 kr)"

let choice = prompt(foodChoice)

let price = 0

switch (choice) {
  case '1':
    foodChoice = 'Pizza'
    price = 120
    break
  case '2':
    foodChoice = 'Pasta'
    price = 100
    break
  case '3':
    foodChoice = 'Salad'
    price = 90
    break
  default:
    foodChoice = 'Pizza'
    price = 120
    alert('Invalid choice, defaulting to Pizza.')
}

alert(`Great choice! You selected: ${foodChoice}.`)


// Step 3 - Subtype choice
let subtypeChoice = ''

if (foodChoice === 'Pizza') {
  let pizzaOptions = "Choose a type of Pizza:\n1. Margherita\n2. Pepperoni\n3. Veggie"
  let pizzaChoice = prompt(pizzaOptions)
  switch (pizzaChoice) {
    case '1': subtypeChoice = 'Margherita'; break
    case '2': subtypeChoice = 'Pepperoni'; break
    case '3': subtypeChoice = 'Veggie'; break
    default:
      subtypeChoice = 'Margherita'
      alert('Invalid choice, defaulting to Margherita.')
  }

} else if (foodChoice === 'Pasta') {
  let pastaOptions = "Choose a type of Pasta:\n1. Spaghetti\n2. Fettuccine\n3. Penne"
  let pastaChoice = prompt(pastaOptions)
  switch (pastaChoice) {
    case '1': subtypeChoice = 'Spaghetti'; break
    case '2': subtypeChoice = 'Fettuccine'; break
    case '3': subtypeChoice = 'Penne'; break
    default:
      subtypeChoice = 'Spaghetti'
      alert('Invalid choice, defaulting to Spaghetti.')
  }

} else if (foodChoice === 'Salad') {
  let saladOptions = "Choose a type of Salad:\n1. Caesar\n2. Greek\n3. Garden"
  let saladChoice = prompt(saladOptions)
  switch (saladChoice) {
    case '1': subtypeChoice = 'Caesar'; break
    case '2': subtypeChoice = 'Greek'; break
    case '3': subtypeChoice = 'Garden'; break
    default:
      subtypeChoice = 'Caesar'
      alert('Invalid choice, defaulting to Caesar.')
  }
}

alert(`You selected: ${subtypeChoice}.`)


// Step 4 - Age
let age = Number(prompt('Is this for a child or an adult? Please enter your age:'))

if (isNaN(age)) {
  alert('Invalid age input. We will assume this is for an adult.')
} else if (age < 18) {
  alert('Note: As you are under 18, please ensure you have parental consent for this order.')
} else {
  alert('You are an adult. Thank you for confirming your age.')
}


// Step 5 - Order confirmation
let confirmOrder = prompt(
  `You are about to order a ${foodChoice} (${subtypeChoice}) for a total of ${price} kr.\n` +
  `Do you want to proceed?\n1. Yes\n2. No`
)

if (confirmOrder === '1') {
  alert(`Thank you, ${userInput}! You have ordered a ${subtypeChoice}. Your order will be ready shortly. Enjoy your meal!`)
} else {
  alert('Order cancelled. Thank you for visiting Eclerk Pizzeria!')
}
