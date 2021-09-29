let loadBtn = document.querySelector('[data-loadFile]');
let removeBtn = document.querySelector('[data-remove]');

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
let localBookingArray;
let removeConfirmation = true;

let save = JSON.parse(window.localStorage.getItem('save'));

let testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
 
let SaveArrayLocaly = () => {
    
    if(save === true) { 
        let bookingsArray = [];
        window.localStorage.setItem('bookingArray', JSON.stringify(bookingsArray));
        save = false;
        window.localStorage.setItem('save', JSON.stringify(save));       
    }

    if (removeConfirmation === true) {
        localBookingArray = JSON.parse(window.localStorage.getItem('bookingArray'));
        localBookingArray.push(newBooking);
        window.localStorage.setItem('bookingArray', JSON.stringify(localBookingArray));
    } else removeConfirmation = true;
    
}

loadBtn.addEventListener('click', () => {
    SaveArrayLocaly();
    
    // console.log(bookingsArray[0].name, bookingsArray[0].email);
    console.log(JSON.parse(window.localStorage.getItem('bookingArray')));
});

removeBtn.addEventListener('click', () => {
    // window.localStorage.removeItem('bookingArray');
    localBookingArray.pop();
    window.localStorage.setItem('bookingArray', JSON.stringify(localBookingArray));
    removeConfirmation = false;
});


testArray.splice(5, 1);
