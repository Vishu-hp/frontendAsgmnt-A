let inpname  = document.getElementById('name');
let email = document.getElementById('email');
let age = document.getElementById('age');
let button  = document.getElementById('button');

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener('click', (e)=>{
    if(inpname.value == ''){
        alert("Name field can't be empty");
        e.preventDefault();
    }
    else if(!email.value.match(mailformat)){
        alert("Invalid email address");
        e.preventDefault();
    }
    else if(age.value=='' || age.value <= 0){
        alert("Invalid age");
        e.preventDefault();
    }
    else{
        alert("Form submitted");
    }
})