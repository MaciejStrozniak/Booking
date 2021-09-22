// linking functions to Booking buttons

let bookingButton = document.querySelectorAll('[data-booking]'); // this is an array now

bookingButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log('Działa- różne przyciski');
    });
});
