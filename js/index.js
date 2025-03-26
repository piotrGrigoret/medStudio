
if(document.querySelector(".hero__menu-section")){

    document.addEventListener("DOMContentLoaded", () => {
        const menu = document.querySelector(".hero__menu-section");
        const items = document.querySelectorAll(".hero__menu-section li");
        const indicator = document.createElement("div");

        indicator.classList.add("menu-indicator");
        menu.appendChild(indicator);

        function moveIndicator(element) {
            const { offsetLeft, offsetWidth } = element;
            console.log(element.offsetWidth);
            indicator.style.transform = `translateX(${offsetLeft + offsetWidth / 2}px)`;
        }

        if (items.length > 0) {
            moveIndicator(items[0]);
        }

        items.forEach((item) => {
            item.addEventListener("click", () => {
                moveIndicator(item);
            });
        });
    });
}


if(document.querySelector(".accordion")){
  
    document.querySelectorAll(".accordion-header").forEach(button => {
        button.addEventListener("click", () => {
            const accordionItem = button.parentElement;
            const isActive = accordionItem.classList.contains("active");
            const arrow = button.querySelector("img");
            document.querySelectorAll(".accordion-item").forEach(item => {
                item.querySelector("img").classList.remove("img-active");
                item.classList.remove("active");
                item.querySelector(".accordion-content").style.maxHeight = null;
            });
    
            if (!isActive) {
                arrow.classList.add("img-active");
                accordionItem.classList.add("active");
                const content = accordionItem.querySelector(".accordion-content");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
      
}

if(document.getElementById("modal")){

    const modal = document.getElementById("modal");
    const openModal = Array.from(document.querySelectorAll("#openModal"));
    const closeModal = document.querySelector(".modal__close");
    openModal.map(o =>{
        o.addEventListener("click", () => {
            modal.classList.add("active");
        });
    })

    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
}


const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.header__nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
});
