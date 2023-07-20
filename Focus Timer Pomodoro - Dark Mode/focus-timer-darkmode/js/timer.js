export default function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    buttonPlay,
    buttonPause,
}) {
    function updateTimeDisplay(newMinutes, newSeconds) {
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(newSeconds).padStart(2, "0")
    }
    function countDown() {
        timerTimeOut = setTimeout(function() {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            updateTimeDisplay(minutes, 0)
            if(minutes <= 0 && seconds <= 0){
                buttonPlay.classList.remove('hide')
                buttonPause.classList.add('hide')
                return
            }
            if(seconds <= 0) {
                seconds = 60
                --minutes
            }
           updateTimeDisplay(minutes, String(seconds - 1))
           countDown()
        }, 1000)
    }
    function plusFive() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        let sum = minutes + 5
        updateTimeDisplay(sum, seconds)
    }
    function minusFive() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        let minus = minutes - 5
        if (minus <= 0) {
            updateTimeDisplay(0, seconds)
            return
        }
        updateTimeDisplay(minus, seconds)
    }
    function hold() {
        clearTimeout(timerTimeOut)
    }
    return {
        countDown,
        plusFive,
        minusFive,
        updateTimeDisplay,
        hold
    }
}