const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

menuemail.addEventListener('click', togglemenuemail);

function togglemenuemail() {
    desktopmenu.classList.toggle('inactive');
}