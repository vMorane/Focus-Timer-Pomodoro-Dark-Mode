const forestAudio = new Audio("../sounds/forest.wav")
const rainAudio = new Audio("../sounds/rain.wav")
const coffeAudio = new Audio("../sounds/coffe.wav")
const fireplaceAudio = new Audio("../sounds/fireplace.wav")

forestAudio.volume = 0.5
rainAudio.volume = 0.5
coffeAudio.volume = 0.5
fireplaceAudio.volume = 0.5

export default function Sounds() {
    function forest() {
        stopAudio()
        forestAudio.play()
        forestAudio.loop = true
    }
    function rain() {
        stopAudio()
        rainAudio.play()
        rainAudio.loop = true
    }
    function coffe() {
        stopAudio()
        coffeAudio.play()
        coffeAudio.loop = true
    }
    function fireplace() {
        stopAudio()
        fireplaceAudio.play()
        fireplaceAudio.loop = true
    }
    function stopAudio() {
        forestAudio.pause()
        rainAudio.pause()
        coffeAudio.pause()
        fireplaceAudio.pause()
    }
    function changeVolumeForest(value) {
        forestAudio.volume = value;
    }
    return {
        forest,
        rain,
        coffe,
        fireplace,
        changeVolumeForest,
        forestAudio,
        rainAudio,
        coffeAudio,
        fireplaceAudio
    }
}
export const elementsAudio = {
    forestAudio,
    rainAudio,
    coffeAudio,
    fireplaceAudio
}