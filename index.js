document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const Slink = document.querySelector('.nav-links2');


   


    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        Slink.classList.toggle('slink');

        burger.classList.toggle('toggle');
    });

    // Close dropdowns on mobile when clicking outside
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        Slink.classList.remove('Slink');

        }
    });

    // Toggle dropdowns on mobile
    const dropdowns = document.querySelector('.nav-links li');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (event) => {
            if (window.innerWidth <= 768) {
                event.stopPropagation();
                const subMenu = dropdown.querySelector('.dropdown');
                if (subMenu) {
                    subMenu.classList.toggle('nav-active');
                }
            }
        });
    });
    
});

function Alrt() {
    console.log("DONT Look HERE");
    alert('SUCCESSFULLY SUBMIT');
    
}
function log(){
    alert('You r going to Log-Out')
}

