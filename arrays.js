// Day 1 Blue Badge

// Challenge 1
// Bronze: Console log each element of the array, but backwards. 
// Silver: Bronze + console logging each element of the array with the first letter capitalized. 
// Gold: Bronze + Silver + Console log only the odd indexed elements

let foods = ["apple", "orange", "rice", "bread", "tofu"]

for (let i = foods.length - 1; i > -1; i--){ 
    if (i % 2 == 1){
        let word = foods[i]
        let titleCaseWord = titleCase(word)
    
        console.log(`Foods[${i}]:` + titleCaseWord)
    } 
}

function titleCase(word){
    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1)

    return first_letter + rest
}

// Challenge 2
// Write a "for of" loop that goes over the foods array 
// Bronze: Write a function that checks the length of a string and if it is more than 4 char, have it return true, else return false. console.log() these from inside the "for of" loop.
// Silver: Write another function that takes in an a food and the allergies array and will return "You can eat" if they can eat the item, otherwise return "You can't eat" if they can't. Use this function in the loop also. Hint: Gluten == no bread, soy == no tofu. 
// Gold: Bronze + Silver + Write logic that console logs _(is/is not) a long word, and you (can/ can't) eat it with your allergies. For all elements of the foods array. 

let allergies = ["gluten", "soy"]
// Write your loop here
for (let food of foods){
    // assigns a string based on the function returning true / false
    let longWordResult = foodLengthCheck(food) ? "" : "not "

    // formatting the output
    let response = `${food} is ${longWordResult}a long word, and ${foodAllergyCheck(food)} it with your allergies.`

    console.log(response)
}

// Write your function here
function foodLengthCheck(food){
    return food.length > 4 
}

function foodAllergyCheck(food){
    // Translates food to their underlying allergy
    allergyMap = {
        bread :"gluten",
        tofu :"soy"
    }

    // Checks to see if food is in the allergyMap
    let allergyLookup = allergyMap[food]

    // If it is and is one of their allergies
    if (allergies.includes(allergyLookup)){
        return "You can't eat"
    } else {
        return "You can eat"
    }
}


// Challenge 3 
// Bronze: Write a loop that uses array push to fill the face card & numbered card arrays. With elements from cards.
// Silver: Bronze + also empty the cards array as you go, so in the end you should have an empty cards array and faceCards/numberedCards filled.
// Gold Bronze + Silver + Write a function that uses a switch to return the card type and use that in your code. 

let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
let faceCards = []
let numberedCards = []

while(cards.length > 0){
    let card = cards.pop()
    if (typeof card == "string"){
        faceCards.push(card)
    } else {
        numberedCards.push(card)
    }
}

console.log(cards)
console.log(faceCards)
console.log(numberedCards)

function isFaceCard(card){
    switch(card){
        case "A":
        case "K":
        case "Q":
        case "J":
            return true
        default:
            return false
    }
}


// Challenge 4

let animals = [
    "bat", "tiger", "yak",
    "monkey", "snake", "lizard", 
    "panda", "monkey", "hyena"
]

let zooTrip = {
    seen: [],
    animalsSeen: 0 
}

animals.forEach((animal) => {
    console.log(`${animal} was seen today at the zoo!`)
    // Order Dependent code
    if (!zooTrip.seen.includes(animal)) zooTrip.animalsSeen++
    else {console.log(animal + " is a repeat.")}
    seenAtTheZoo(animal)
})

console.log(zooTrip.seen)

function seenAtTheZoo(animal){
    zooTrip.seen.push(animal)
}