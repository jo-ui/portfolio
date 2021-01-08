// navigation menu

(() => {
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
        navMenu = document.querySelector(".nav-menu"),
        closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu() {
        navMenu.classList.add("open");
    }

    function hideNavMenu() {
        navMenu.classList.remove("open");
    }

    //atach an event handler to doc

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains('link-item')) {
            if (event.target.hash !== "") {
                event.preventDefault();
                const hash = event.target.hash;
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.add("active", "inner-shadow");
                if (navMenu.classList.contains("open")) {
                    event.target.classList.add(".active", "inner-shadow");
                    event.target.classList.remove("outer-shadow", "hover-in-shadow");
                    hideNavMenu();
                } else {
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) => {
                        if (hash === item.hash) {
                            item.target.classList.add(".active", "inner-shadow");
                            item.target.classList.remove("outer-shadow", "hover-in-shadow");
                        }
                    })
                }
            }
        }
    })

})();




/*------------ about section tabs --------*/

(() => {
    const aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        //if event.target contains 'tab-item' class and contains 'active' class
        if (event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")) {
            const target = event.target.getAttribute("data-target");
            //deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            //activate new tab-item
            event.target.classList.add("active", "outer-shadow");
            //deactivate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            //activate new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();

// hide all sections exept active

(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        if (!section.classList.contains("active")) {
            section.classList.add("hide");
        }
    })
})