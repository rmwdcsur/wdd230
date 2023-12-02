const hamButton = document.querySelector('.icon');
const close1 = document.querySelector('#close1');
const close2 = document.querySelector('#close2');
const close3 = document.querySelector('#close3');
const sidemenu = document.querySelector('.side-menu');

hamButton.addEventListener('click', () => {
    close1.classList.toggle('closebtn1');
    close2.classList.toggle('closebtn2');
    close3.classList.toggle('closebtn3');
    sidemenu.classList.toggle('hidden');

    //hamButton.classList.toggle('open');
});