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


// document.getElementById('input').value = 'Confirm booking';

// window.onclick = (event) => {
//     if (event.target == modal)
//     modal.style.display = 'none';
// };



// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }