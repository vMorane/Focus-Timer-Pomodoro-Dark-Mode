import Timer from "./timer.js"
import Sounds from "./sounds.js"
import { elementsAudio } from "./sounds.js"
import { elements } from "./elements.js"
import { Mode } from "./darkmode.js"
import cardSelected from "./card.js"

const {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonMinus,
    cardForest,
    cardRain,
    cardCoffe,
    cardFireplace,
    minutesDisplay,
    secondsDisplay,
    changeForest,
    changeRain,
    changeCoffe,
    changeFireplace,
    bgBody,
    ligthMode,
    darkMode,
    timeColor,
    root,
} = elements

const {
    forestAudio,
    rainAudio,
    coffeAudio,
    fireplaceAudio
} = elementsAudio

const mode = Mode(
    ligthMode,
    darkMode,
    bgBody,
    timeColor,
    root
)
    
let timerTimeOut

const sounds = Sounds()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    buttonPlay,
    buttonPause,
})

const bgCardSeleted = cardSelected(
    cardForest,
    cardRain,
    cardCoffe,
    cardFireplace
)




// onChange volume
changeForest.addEventListener('change', function() {
    forestAudio.volume = changeForest.value
})
changeRain.addEventListener('change', function() {
    rainAudio.volume = changeRain.value
})
changeCoffe.addEventListener('change', function() {
    coffeAudio.volume = changeCoffe.value
})
changeFireplace.addEventListener('change', function() {
    fireplaceAudio.volume = changeFireplace.value
})


// DarkMode
ligthMode.addEventListener('click', function() {
    mode.dark()
})
darkMode.addEventListener('click', function() {
    mode.ligth()
})

// Buttons
buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    timer.countDown()
})
buttonPause.addEventListener('click', function() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    timer.hold()
})
buttonStop.addEventListener('click', function() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    timer.updateTimeDisplay(0, 0)
})
buttonPlus.addEventListener('click', function() {
    timer.plusFive()
})
buttonMinus.addEventListener('click', function() {
    timer.minusFive()
})

// Cards
cardForest.addEventListener('click', function() {
    bgCardSeleted.addCardForest()
    sounds.forest()
})
cardRain.addEventListener('click', function() {
    bgCardSeleted.addCardRain()
    sounds.rain()
})
cardCoffe.addEventListener('click', function() {
    bgCardSeleted.addCardCoffe()
    sounds.coffe()
})
cardFireplace.addEventListener('click', function() {
    bgCardSeleted.addCardFireplace()
    sounds.fireplace()
})