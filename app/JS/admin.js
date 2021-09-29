let loadBtn = document.querySelector('[data-loadFile]');
let removeBtn = document.querySelector('[data-remove]');

class Booking
{
    constructor(date, apartment, name, surname, email, mobilePhone)
    {
        this.date = date;
        this.apartment = apartment;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.mobilePhone = mobilePhone;
    }

}

let date = JSON.parse(window.localStorage.getItem('date'));
let apartment = JSON.parse(window.localStorage.getItem('apartment'));
let name = JSON.parse(window.localStorage.getItem('name'));
let surname = JSON.parse(window.localStorage.getItem('surname'));
let email = JSON.parse(window.localStorage.getItem('email'));
let mobilePhone = JSON.parse(window.localStorage.getItem('mobilePhone'));

let newBooking  = new Booking(date, apartment, name, surname, email, mobilePhone);
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
    testAddingElements();
});

removeBtn.addEventListener('click', () => {
    // window.localStorage.removeItem('bookingArray');
    localBookingArray.pop();
    window.localStorage.setItem('bookingArray', JSON.stringify(localBookingArray));
    removeConfirmation = false;
});

// ------------------------ ADDING PARTS TO DOM -----------------------

let testAddingElements = () => {
    let dateElement = document.createElement("div");
    dateElement.classList.add('frame13');
    const newElement = document.getElementById('frame4');
    newElement.appendChild(dateElement);
}

testArray.splice(5, 1);

// dotsManipulate() {
       
//     if(metronome.isRunning === true) return;
//     else {
//             let dot = document.createElement("div"); // dot przechowuje nowy element
//             dot.classList.add("dot"); // dodanie klasy do nowego dot
//             dot.setAttribute("id", `dot${this.measure}`); // dodatnie id do nowego dot
//         const element = document.getElementById("dots"); // powiązanie z section dots
    
//         if(this.measure <= 12 && this.measure != 1) {
            
//             element.appendChild(dot); // dodanie elementu do sekcji dots

//         }
//         else {
//             for(let i = 1; i <= 12; i++) {
//                 const elementsToRemove = document.getElementById(`dot${i}`);
//                     element.removeChild(elementsToRemove);
//                     //   dotsArray.pop[i];
//                     this.r = 1;
//                     this.reset = true;
//             }
//         }

//         if(this.reset === true) {
//             element.appendChild(dot);
//             this.reset = false;
//         }
//     } 
// }