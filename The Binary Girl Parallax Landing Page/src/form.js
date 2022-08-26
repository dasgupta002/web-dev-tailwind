const form = document.querySelector('#subscribe__form')
const btn = document.querySelector('#subscribe__btn')
const input = document.querySelector('#email')

const options = {
    pending: `
        <svg xmlns = "http://www.w3.org/2000/svg" class = "animate-spin" width = "24" height = "24" fill = "currentColor" viewBox = "0 0 256 256">
            <rect width = "256" height = "256" fill = "none"></rect>
            <line x1 = "128" y1 = "32" x2 = "128" y2 = "64" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "16"></line>
            <line x1 ="224" y1 = "128" x2 = "192" y2 = "128" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "16"></line>
            <line x1 = "195.9" y1 = "195.9" x2 = "173.3" y2 = "173.3" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "16"></line>
            <line x1 = "128" y1 = "224" x2 = "128" y2 = "192" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "16"></line>
            <line x1 = "60.1" y1 = "195.9" x2 = "82.7" y2 = "173.3" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "16"></line>
            <line x1 = "32" y1 = "128" x2 = "64" y2 = "128" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "16"></line>
            <line x1 = "60.1" y1 = "60.1" x2 = "82.7" y2 = "82.7" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "16"></line>
        </svg>
        <span class = "uppercase tracking-wide animate-pulse">Sending ...</span>
    `,
    success: `
        <span class = "uppercase tracking-wide">Thank You</span>
        <span class = "uppercase tracking-wide">🍺</span>
    `
}

function saveMail(mail) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 2000)
    })
}

form.addEventListener('submit', async function(event) {
    event.preventDefault()

    form.setAttribute('disabled', 'true')
    btn.setAttribute('disabled', 'true')
    btn.innerHTML = options.pending

    const userEmail = input.value
    input.style.display = 'none'
    await saveMail(userEmail)
    btn.innerHTML = options.success
})