export function Mode(
    ligthMode,
    darkMode,
    bgBody,
    timeColor,
    root
) {
    function dark() {
        ligthMode.classList.add('hide')
        darkMode.classList.remove('hide')
        bgBody.style.backgroundColor = "#121214"
        timeColor.style.color = "#fff"
        root.style.setProperty('--bg-input-range', '#fff')
        root.style.setProperty('--bg-card-hover', '#424242')
        root.style.setProperty('--fill-svg', '#C4C4CC')
        root.style.setProperty('--bg-card', '#29292E')
        root.style.setProperty('--bg-card-selected', '#0A3442')
    }
    function ligth() {
        ligthMode.classList.remove('hide')
        darkMode.classList.add('hide')
        bgBody.style.backgroundColor = "#fff"
        timeColor.style.color = "var(--cc-h1)"
        root.style.setProperty('--bg-input-range', '#323238')
        root.style.setProperty('--bg-card-hover', '#c4c4c4')
        root.style.setProperty('--fill-svg', '#323238')
        root.style.setProperty('--bg-card', '#E1E1E6')
        root.style.setProperty('--bg-card-selected', '#02799D')
    }
    return {
        dark,
        ligth
    }
}