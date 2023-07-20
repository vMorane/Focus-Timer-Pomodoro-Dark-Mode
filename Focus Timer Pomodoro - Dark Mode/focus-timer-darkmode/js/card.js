export default function cardSelected(
    cardForest,
    cardRain,
    cardCoffe,
    cardFireplace
) {

    function addCardForest() {
        clearCards()
        cardForest.classList.add('selected')
    }
    function addCardRain() {
        clearCards()
        cardRain.classList.add('selected')
    }
    function addCardCoffe() {
        clearCards()
        cardCoffe.classList.add('selected')
    }
    function addCardFireplace() {
        clearCards()
        cardFireplace.classList.add('selected')
    }
    function clearCards() {
        cardForest.classList.remove('selected')
        cardRain.classList.remove('selected')
        cardCoffe.classList.remove('selected')
        cardFireplace.classList.remove('selected')
    }
    return {
        addCardForest,
        addCardRain,
        addCardCoffe,
        addCardFireplace
    }
}