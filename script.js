// Score from Home Team
let scoreHome = document.getElementById("score-home")
// Score from Guest Team
let scoreAway = document.getElementById("score-away")

let countHome = 0
let countAway = 0

const freeThrowHome = () => {
    countHome += 1
    scoreHome.textContent = countHome
}
const twoPointHome = () => {
    countHome += 2
    scoreHome.textContent = countHome
}
const threePointHome = () => {
    countHome += 3
    scoreHome.textContent = countHome
}

const freeThrowAway = () => {
    countAway += 1
    scoreAway.textContent = countAway
}
const twoPointAway = () => {
    countAway += 2
    scoreAway.textContent = countAway
}
const threePointAway = () => {
    countAway += 3
    scoreAway.textContent = countAway
}