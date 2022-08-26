const btns = document.querySelectorAll('[data-slideBtn]')
const container = document.querySelector('[data-slideCont]')
const slides = [...document.querySelectorAll('[data-slide]')]

let index = 0
let flag = false

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        if(flag) return
        flag = true

        event.currentTarget.id === 'prev' ? index-- : index++
        
        container.style.transform = `translateX(-${index * slides[0].clientWidth}px)`
        
        btns.forEach(function(btn) {
            btn.removeAttribute('disabled')
        })

        index === 0 && btns[0].setAttribute('disabled', 'true')
    })
})

container.addEventListener('transitionend', function() {
    flag = false
})

document.querySelectorAll('[data-slide] img').forEach(function(element) {
    element.ondragstart = function() {
        return false
    }    
})

const slideObserver = new IntersectionObserver(function(slide) {
    if(slide[0].isIntersecting) {
        btns[1].setAttribute('disabled', 'true')
    } 
} , { threshold: 0.75 })
slideObserver.observe(slides[slides.length - 1])