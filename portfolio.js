/* Calling elements from HTML */
const iconMenu = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('navbar');
const mainLogo = document.getElementById('logo');
const modal = document.getElementById('myModal');
const openModal = document.getElementById('modal-btn');
const closeModal = document.getElementsByClassName('close-btn')[0];
const projectContainer = document.querySelector('.hidden');
const projectCards = document.querySelector('.main__projects-cardcontainer');
const navItem = document.querySelectorAll('.navbar__item');
const closeContainer = document.querySelector('.closeBtn')

// Project Container
navItem[2].addEventListener('click', () => {
    projectContainer.classList.replace('hidden', 'main__projects-container');
})

closeContainer.addEventListener('click', () => {
    projectContainer.classList.replace('main__projects-container', 'hidden');
})

/* Calling the events */
iconMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
    iconMenu.classList.replace('hide', 'toggle-responsive');
    mainLogo.classList.toggle('logo');
})

openModal.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 767) {
         iconMenu.classList.replace('toggle-responsive', 'hide');
         mainLogo.classList.remove('logo');
         mainMenu.classList.remove("show");
    }
})


document.addEventListener('DOMContentLoaded', getProjects)
// GET PROJECTS INFO
async function getProjects() {
    try {
        let result = await fetch('./assets/projects.json');
        let data = await result.json()
        let projects = await data.projects;
        // console.log(projects)
        projects = projects.map(item => {
            const title = item.title;
            const description = item.description;
            const tech = item.tech;
            const link = item.link;
            const photo = item.photo;
            return {title, description, tech, link, photo}
            
        })
        let card = projects
        displayProjects(card)

    } catch (err) {
        console.error(err)
    }
}

// getProjects()

function displayProjects(card) {
    let fragment = ""
    card.forEach(item => {
        fragment += `
        <article class="card_container">
            <figure class="main__projects-card">
                <img src=${item.photo} alt=${item.title} loading="lazy">
            </figure>
            <div class="middle">
                <p>${item.description}</p>
                <p>${item.tech}</p>
                <p><a href=${item.link} target="_blank" rel="noreferrer noopener" title="Survey Page with JS validation">${item.title}</a></p>
            </div>
        </article>`;
    });
    projectCards.innerHTML = fragment;
}

// displayProjects()