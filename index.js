console.log('Welcome to Around the World Travels');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const contactNo = document.getElementById('contact');

let nameSubmission;
let nameSubmission2;
let emailSubmission;
let contactSubmission;
let stateSubmission;
let carSubmission;
let addressSubmission;

// Validating Name
firstName.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([a-zA-Z]){1,12}$/; //Name must start with an alphabet and minimum length must be 2 and maximum 13
    let str = firstName.value;
    if (regex.test(str)) {
        firstName.classList.remove('is-invalid');
        nameSubmission = true;
    }
    else {
        firstName.classList.add('is-invalid');
        nameSubmission = false;
    }
})

lastName.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([a-zA-Z]){3,12}$/; //Name must start with an alphabet and minimum length must be 2 and maximum 13
    let str = lastName.value;
    if (regex.test(str)) {
        lastName.classList.remove('is-invalid')
        nameSubmission2 = true;
    }
    else {
        lastName.classList.add('is-invalid');
        nameSubmission2 = false;
    }
})

// Validating Email
email.addEventListener('blur', () => {
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)/;
    let str = email.value;
    let reg = /\.com$/
    let reg2 = /\.in$/
    let reg3 = /\.co$/
    if (regex.test(str)) {
        if (reg.test(str)) {
            email.classList.remove('is-invalid')
            emailSubmission = true;
        }
        else if (reg2.test(str)) {
            email.classList.remove('is-invalid')
            emailSubmission = true;
        }
        else if (reg3.test(str)) {
            email.classList.remove('is-invalid')
            emailSubmission = true;
        }
        else {
            email.classList.add('is-invalid');
            emailSubmission = false;
        }
    }
    else {
        email.classList.add('is-invalid');
        emailSubmission = false;
    }
})

// validating Contact Number
contactNo.addEventListener('blur', () => {
    let regex = /^([0-9]){10,12}$/;
    let str = contactNo.value;
    if (regex.test(str)) {
        contactNo.classList.remove('is-invalid')
        contactSubmission = true;
    }
    else {
        contactNo.classList.add('is-invalid');
        contactSubmission = false;
    }
})

// Validating State and Car

let state = document.getElementById('defaultState');
let car = document.getElementById('defaultCar');

state.addEventListener('blur', () => {
    if (state.value != 'Select any one') {
        state.classList.remove('is-invalid')
        stateSubmission = true;
    }
    else {
        state.classList.add('is-invalid')
        stateSubmission = false;
    }


})
car.addEventListener('blur', () => {
    if (car.value != 'Select Your car') {
        car.classList.remove('is-invalid')
        carSubmission = true;
    }
    else {
        car.classList.add('is-invalid')
        carSubmission = false;
    }
})

// Validating Address

let address = document.getElementById('address');
address.addEventListener('blur', () => {
    if (address.value != '') {
        address.classList.remove('is-invalid')
        addressSubmission = true;
    }
    else {
        address.classList.add('is-invalid');
        addressSubmission = false;
    }
})

//  Submitting

submit = document.getElementById('submit');
reset = document.getElementById('reset');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let success = document.getElementById('successMessage');
    let alert1 = document.getElementById('alertMessage');

    if (nameSubmission && nameSubmission2 && emailSubmission && contactSubmission && stateSubmission && carSubmission && addressSubmission) {
        let confirm1 = confirm('Do you want to Submit the form?')
        if (confirm1) {
            let div = document.getElementById('message');
            div.innerHTML = `<center><strong>Well Done!</strong> Form Submitted.</center>
                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
            div.classList.add('show');
            div.classList.add('alert-success');
            setTimeout(() => {
                div.classList.remove('show')
                div.classList.remove('alert-success');
                div.innerHTML = ``;
                // $('#alert1').alert('close');
                // $('#alert1').hide();
                // $('#success').show();
            }, 3000);
        }
        else { }
    }
    else {
        let div = document.getElementById('message');
        div.innerHTML = `<center><strong>Warning!</strong> Details Invalid.</center>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
        div.classList.add('show');
        div.classList.add('alert-warning');
        setTimeout(() => {
            div.classList.remove('show');
            div.classList.remove('alert-warning');
            div.innerHTML = ``;
            // $('#success').alert('close');
            // $('#success').hide();
            // $('#alert1').show();
        }, 3000);
    }
})

// Resetting

let confirm2;

reset.addEventListener('click', () => {
    confirm2 = confirm('Do you want to reset?')
    if (confirm2) {
        window.location.reload();
    }
    else { }
})