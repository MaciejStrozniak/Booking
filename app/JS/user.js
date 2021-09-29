// ------------ Create booking object holding all user data ----------

class Client
{
    constructor(name, surname, email, mobilePhone)
    {
        this.name;
        this.surname;
        this.email;
        this.mobilePhone;
    }

    SaveData() {
        this.name = nameTextElement.value;
        this.surname = surnameTextElement.value;
        this.email = emailTextElement.value;
        this.mobilePhone = mobileTextElement.value;

        window.localStorage.setItem('name', JSON.stringify(this.name));
        window.localStorage.setItem('surname', JSON.stringify(this.surname));
        window.localStorage.setItem('email', JSON.stringify(this.email));
        window.localStorage.setItem('mobilePhone', JSON.stringify(this.mobilePhone));
    }
}

class Reservation
{
    constructor(date, apartment)
    {
        this.date;
        this.apartment;
    }

    SaveApartment() {
        this.date = date.innerHTML;
        this.apartment = apartment.innerHTML;

        window.localStorage.setItem('date', JSON.stringify(this.date));
        window.localStorage.setItem('apartment', JSON.stringify(this.apartment));
    }
}

// ----------- Linking functions to DOM -------------

let modal = document.getElementById('myModal');
let overlay = document.getElementById('overlay');
let bookingButton = document.querySelectorAll('[data-booking]'); // this is an array now
let closeBtn = document.querySelector('[data-close]');
let confirmBtn = document.getElementById('input');
// let confirmBtn = document.querySelector('[data-confirm]');

let dateTextElement = document.getElementById('date');
let apartmentTextElement = document.getElementById('apartment');
let nameTextElement = document.getElementById('name');
let surnameTextElement = document.getElementById('surname');
let emailTextElement = document.getElementById('email');
let mobileTextElement = document.getElementById('mobile');
let testBtn = document.querySelector('[data-test]');

// ------------ creating client and apartment objects -----------------

const client = new Client(nameTextElement, surnameTextElement, emailTextElement, mobileTextElement); 
const reservation = new Reservation(dateTextElement, apartmentTextElement);

// activating functions linked to buttons

bookingButton.forEach((btn) => {
    btn.addEventListener('click', () => {

        modal.style.display = 'block';
        overlay.style.display = 'block';
        console.log('Działa- różne przyciski');
    });
});

overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';

});

closeBtn.addEventListener('click', () => {
    if(modal.style.display === 'block')
    {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
        
});

confirmBtn.addEventListener('click', () => {
    client.SaveData();
    reservation.SaveApartment();
    console.log(client.name);
    // let saveThis = true;
    // let saveAdmin = window.localStorage.setItem('save', JSON.stringify(saveThis));
});

testBtn.addEventListener('click', () => {
    console.log(window.localStorage.getItem('name'));
    console.log(window.localStorage.getItem('surname'));
    console.log(window.localStorage.getItem('email'));
    console.log(window.localStorage.getItem('mobilePhone'));
    console.log(window.localStorage.getItem('date'));
    console.log(window.localStorage.getItem('apartment'));
    let saveThis = true;
    let saveAdmin = window.localStorage.setItem('save', JSON.stringify(saveThis));
});

