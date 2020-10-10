const username = document.querySelector("#username");
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const gen = document.querySelectorAll('input[name="gender');

const showError = (element, message)=>{
    const formControl = element.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText=message;
}
const showSuccess=(element)=>{
    const formControl = element.parentElement;
    formControl.className ='form-control success';
}
const getElementByName = (element)=>{
    return element.id.charAt(0).toUpperCase()+element.id.slice(1);
}
const checkRequired =  (inpArr) =>{
    let isRequired = false;
    inpArr.forEach(element => {
        if(!element.value){
            showError(element, `${getElementByName(element)} is required`);
        }
        else{
            showSuccess(element);
            isRequired=true;
        }
        return isRequired;
    });
}

const checkLength = (input, min, max)=>{
    if(input.value.length < min){
        showError(input, `${getElementByName(input)} must be at least ${min} characters`);
    }
    else if( input.value.length>max){
        showError(input, `${getElementByName(input)} must be less than ${max} characters `);
    }
    else{
        showSuccess(input);
    }
}
const checkEmail =(input)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
};

const checkConfirmPassword = (p1, p2)=>{
    if(p1.value!==p2.value){
        showError(p2,`Password do not match`);
    }
}
const checkGender = ()=>{
    let selectedVar;
    let booleanValue=false;
    for(const x of gen){
        if(x.checked){
            selectedVar = x;
            booleanValue=true;
        }
    }
    if(!booleanValue) {
        showError(document.querySelector('#fieldset'),`Gender is required`);
    }else{
        showSuccess(document.querySelector('#fieldset'));
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
   if((!checkRequired([username, email, password, confirmPassword]))){
    if(checkGender(gen)){}
       checkLength(username, 3, 15);
       checkEmail(email);
       checkLength(password, 6,15);
       checkConfirmPassword(password, confirmPassword);
   }
});