//Menu
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.navbar');

menu.onclick = () =>{
    let mn =menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
//recuperation de toute les Lien
let navlink = document.querySelectorAll('nav #menu li a');
//recuperation de toute les Section
let section = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
    const scrollPos = this.window.scrollY + 20
    section.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navlink.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});
//Dark Mode
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-moon-o');
    if(themeToggler.classList.contains('fa-moon-o')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
// function startProgressBarAnimation(progressId,duration){
//     let progressBar = document.getElementById(progressId);
//     let width = 0;
//     let interval = setInterval(frame,duration);
//     function frame() {
//         if(width >=100){
//             clearInterval(interval);
//         }else{
//             width++;
//             progressBar.style.width = width + '%';
//         }
//     }
// }
// startProgressBarAnimation('progress1',10);
// startProgressBarAnimation('progress2',15);
// startProgressBarAnimation('progress3',20);