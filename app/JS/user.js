// linking functions to Booking buttons

let modal = document.getElementById('myModal');
let overlay = document.getElementById('overlay');
let bookingButton = document.querySelectorAll('[data-booking]'); // this is an array now
let closeBtn = document.querySelector('[data-close]');
let inputText = document.getElementById('input');

// activating functions linked to buttons

bookingButton.forEach((btn) => {
    btn.addEventListener('click', () => {
// inputText.innerHTML.valueOf = 'Confirm booking';

        modal.style.display = 'block';
        overlay.style.display = 'block';
        console.log('Działa- różne przyciski');
    });
});

closeBtn.addEventListener('click', () => {
    if(modal.style.display === 'block')
    {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
        
});
