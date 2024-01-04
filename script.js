function ClickOnBurger () {

    const MobileBurger = document.getElementsByClassName ('burger')[0];
    const CrossBurger = document.getElementsByClassName ('cross-icon')[0];
    const MobileNav = document.getElementsByClassName ('navigation')[0];
    
    if(MobileNav.style.display === "none" || MobileNav.style.display === "") {
        MobileNav.style.display = "block";
        MobileBurger.style.display = "none";
        CrossBurger.style.display = "block";
    } 
    else if ( CrossBurger.style.display = "block" || MobileNav.style.display === "block"){
        CrossBurger.style.display = "none";
        MobileBurger.style.display = "block";
        MobileNav.style.display = "none";
    }
}

    // const Burger = document.getElementsByClassName('burger')[0];
    // const Nav = document.getElementsByClassName('navigation')[0];
    
    // Burger.addEventListener('click', () => {
    //     Nav.classList.toggle('Active');
    // });

