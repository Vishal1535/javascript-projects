let NameInput=document.getElementById('Name');
let NameDesc=document.getElementById('NameDesc');
let EmailInput=document.getElementById('Email');
let EmailDesc=document.getElementById('EmailDesc');
let PasswordInput=document.getElementById('Password');
let passwordDesc=document.getElementById("passwordDesc");
let SubmitBtn=document.getElementById('SubmitBtn');
let NameContainer=document.querySelector('.NameContainer');
let EmailContainer=document.querySelector('.EmailContainer');
let PassWordContainer=document.querySelector('.PassWordContainer');
SubmitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
   if(NameFunction()&&EmailValidation()&&PassWordValidation())

   {
    input.forEach(element => {
      element.value='';
    });
    alert("form Submited")

    
   }
    
})

let NameFunction = () => {
  let NameValue = NameInput.value.trim();
  let nameRegex = /^[A-Za-z]+$/;
  let Icon = NameContainer.querySelector('#NameIcon');

  // empty
  if (NameValue.length === 0) {
    Icon.className = "fa-solid fa-xmark";
    Icon.style.color = "red";
    NameDesc.innerText = "Name is required";
    return false;
  }

  // invalid name
  if (!nameRegex.test(NameValue)) {
    Icon.className = "fa-solid fa-xmark";
    Icon.style.color = "red";
    NameDesc.innerText = "Please Enter Correct Name";
    return false;
  }

  // valid name
  Icon.className = "fa-solid fa-check";
  Icon.style.color = "green";
  NameDesc.innerText = "";
  return true;
};

NameInput.addEventListener('input',NameFunction)
let EmailValidation=()=>{
  let EmailVal=EmailInput.value.trim();
   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(EmailVal.length===0)
  {
    EmailDesc.innerText="Please Enter the Email";
    EmailICon.style.bottom="2rem"
    let EmailICon=EmailContainer.querySelector('i');
    EmailICon.className="fa-solid fa-xmark";
    EmailICon.style.color="red";
    return false;

  }
  else if(!emailRegex.test(EmailVal))
  {
    let EmailICon=EmailContainer.querySelector('i');
    EmailICon.className="fa-solid fa-xmark";
    EmailICon.style.color="red";
    
    EmailDesc.innerText="Please Enter Correct Email";
    return false
  }
  else{
     let EmailICon=EmailContainer.querySelector('i');
    EmailICon.className="fa-solid fa-check";
    EmailICon.style.color="green";
    EmailICon.style.bottom='0.6rem'
    EmailDesc.innerText='';
    return true;
  }
}

EmailInput.addEventListener("input",EmailValidation);
let PassWordValidation=()=>{
  let PasswordValue=PasswordInput.value;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if(PasswordValue.length<=7)
  {
    passwordDesc.innerText="Please Enter 8 Digit Password"
    let PassIcon=PassWordContainer.querySelector('i');
    PassIcon.className="fa-solid fa-xmark";
    PassIcon.style.color="red";
    return false;
  }
 
  else{
    passwordDesc.innerText='';
    let PassIcon=PassWordContainer.querySelector('i');
     PassIcon.className="fa-solid fa-check";
    PassIcon.style.color="green"
    return true;

  }
  
}
PasswordInput.addEventListener('input',PassWordValidation);

