let loadBtn = document.querySelector('[data-loadFile]');

loadBtn.addEventListener('click', () => {
    console.log(JSON.parse(window.localStorage.getItem('name')));
    console.log(JSON.parse(window.localStorage.getItem('surname')));
    console.log(JSON.parse(window.localStorage.getItem('email')));
    console.log(JSON.parse(window.localStorage.getItem('mobilePhone')));
});