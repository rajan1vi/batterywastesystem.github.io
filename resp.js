burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListner('click',()=>{
    rightNav.classList.toggle('v-hidden-resp');
    navList.classList.toggle('v-hidden-resp');
    navbar.classList.toggle('h-nav-resp');


})