console.log('Form validation Javascript');

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let btn = document.getElementById('btn');

let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let phoneValid = false;
// let gender = document.querySelectorAll('.gender-select');

// console.log(firstName, lastName, email, phone);

firstName.addEventListener('blur', ()=>{
    let dangerText = document.getElementById('invalid-fname');
    let reg = /^[a-zA-Z]{0,8}$/;
    let str = firstName.value;
    // console.log(reg.test(str));
    if(reg.test(str)){
        firstName.classList.remove('danger');
        dangerText.classList.add('show');
        firstNameValid = true;
    }
    else{
        firstName.classList.add('danger');
        dangerText.classList.remove('show');
        firstNameValid = false;
    }
});
lastName.addEventListener('blur', ()=>{
    let dangerText = document.getElementById('invalid-lname');
    let reg = /^[a-zA-Z]{0,8}$/;
    let str = lastName.value;
    // console.log(reg.exec(str));
    if(reg.test(str)){
        lastName.classList.remove('danger');
        dangerText.classList.add('show');
        lastNameValid = true;   
    }
    else{
        lastName.classList.add('danger');
        dangerText.classList.remove('show');
        lastNameValid = false;
    }
});

email.addEventListener('blur', ()=>{
    let dangerText = document.getElementById('invalid-email');
    let reg = /^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,10}$/;
    let str = email.value;
    // console.log(reg, str);
    if(reg.test(str)){
        email.classList.remove('danger');
        dangerText.classList.add('show');
        emailValid = true;
    }
    else{
        email.classList.add('danger');
        dangerText.classList.remove('show');
        lastNameValid = false;
    }
});

phone.addEventListener('blur', ()=>{
    let dangerText = document.getElementById('invalid-phone');
    let reg = /^([0-9]{9,15}$)/;
    let str = phone.value;
    // console.log(reg, str);
    if(reg.test(str)){
        phone.classList.remove('danger');
        dangerText.classList.add('show');
        phoneValid = true;
    }
    else{
        phone.classList.add('danger');
        dangerText.classList.remove('show');
        phoneValid = false;
    }
});


let messageContainer = document.querySelector('.message-container');
btn.addEventListener('click', (e)=>{
    // console.log('Form Submited');
    let html = 
    e.preventDefault();
    if(firstNameValid && lastNameValid && emailValid && phoneValid){
        messageContainer.innerHTML = `<div class="message success-message">
                                        <h3>Message:</h3>
                                        <p>Your form submitted successfully</p>
                                    </div>`;
    }
    else{
        messageContainer.innerHTML = `<div class="message danger-message">
                                        <h3>Message:</h3>
                                        <p>Your form submitted successfully</p>
                                    </div>`;
    }
})



