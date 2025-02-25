const aboutTab = document.getElementById("about-tab")
const contactTab = document.getElementById("contact-tab")
const projectTab = document.getElementById("project-tab")

const about = document.getElementById("about")
const contact = document.getElementById("contact")
const projects = document.getElementById("projects")

aboutTab.addEventListener('click', () => {
    aboutTab.className = 'active-tab'
    about.className = 'active-card'


    contactTab.className = 'tabs'
    contact.className = 'card'

    projectTab.className = 'tabs'
    projects.className = 'card'

    console.log('About active')
})

contactTab.addEventListener('click', () => {
    aboutTab.className = 'tabs'
    about.className = 'card'

    contactTab.className = 'active-tab'
    contact.className = 'active-card'

    projectTab.className = 'tabs'
    projects.className = 'card'

    console.log('Contact active')
})

projectTab.addEventListener('click', () => {
    aboutTab.className = 'tabs'
    about.className = 'card'

    contactTab.className = 'tabs'
    contact.className = 'card'

    projectTab.className = 'active-tab'
    projects.className = 'active-card'

    console.log('Project active')
})