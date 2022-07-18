function slidePlugin(activeElement = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeElement].classList.add('active')

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            clearActiveClass()

            slide.classList.add('active')
        })
    })

    function clearActiveClass() {
        slides.forEach(slide => {
            slide.classList.remove('active')
        })
    }
}

slidePlugin(0)