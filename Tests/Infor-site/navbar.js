function toggleMenu() {
    var navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');

    var title1 = document.querySelector('.title-1');
    var 
    if (navbarMenu.classList.contains('active')) {
        title1.classList.add('navbar-active');
        title1.style.top = '120px'; 
    } else {
        title1.classList.remove('navbar-active');
        title1.style.top = '0px';
    }
}