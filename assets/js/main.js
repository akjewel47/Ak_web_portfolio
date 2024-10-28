/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    //serviceId - templateId - #form - publickey
    emailjs.sendForm('service_7ols68o', 'template_5mva7wc', '#contact-form', 'Xys7qmyKA278v2fSw')
        .then(() => {
            //show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input field
            contactForm.reset()
        }, () => {
            //show error  message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 biewport height .add the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')
        sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            // sectionsClass.classList.remove('active-link')
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
    //reset: true , // Animations Repeat
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`, { origin: 'left', delay: 800 })
sr.reveal(`.skills`, { origin: 'left', delay: 1000 })
sr.reveal(`.about`, { origin: 'right', delay: 1200 })
sr.reveal(`.projects__card, .services__card,
    .experience__card`, { interval: 100 })