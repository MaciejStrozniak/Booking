let loadBtn = document.querySelector('[data-loadFile]');
let clearBtn = document.querySelector('[data-clearFile]');

class Booking
{
    constructor(name, surname, email, mobilePhone)
    {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.mobilePhone = mobilePhone;
    }

}

let name = JSON.parse(window.localStorage.getItem('name'));
let surname = JSON.parse(window.localStorage.getItem('surname'));
let email = JSON.parse(window.localStorage.getItem('email'));
let mobilePhone = JSON.parse(window.localStorage.getItem('mobilePhone'));

let newBooking  = new Booking(name, surname, email, mobilePhone);

let bookingsArray = [];

let save = window.localStorage.getItem('save');

// let fillArray = () => {
//     bookingsArray.push(newBooking);
//     save = true;
//     return bookingsArray;
// }; 

let saveArrayLocaly = () => {
    
    if(save === true) {
        window.localStorage.setItem('bookingArray', JSON.stringify(bookingsArray));
        save = false;
        window.localStorage.setItem('save', JSON.stringify(save));
        
    }
    let localBookingArray = JSON.parse(window.localStorage.getItem('bookingArray'));
    localBookingArray.push(newBooking);
    window.localStorage.setItem('bookingArray', JSON.stringify(localBookingArray));
}


loadBtn.addEventListener('click', () => {
    // fillArray();
    // saveArrayLocaly();
    console.log(save);
    // console.log(newBooking);
    // console.log(bookingsArray);
    // console.log(bookingsArray[0].name, bookingsArray[0].email);
    console.log(JSON.parse(window.localStorage.getItem('bookingArray')));
});

clearBtn.addEventListener('click', () => {
    window.localStorage.clear();
});

