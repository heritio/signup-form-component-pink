
let firstNameInput = document.querySelector(".info-firstname"); 
let lastNameInput = document.querySelector(".info-lastname"); 
let emailInput = document.querySelector(".info-email"); 
let passwordInput = document.querySelector(".info-password"); 

let firstBorder = document.querySelector(".inputborder1");
let secondBorder = document.querySelector(".inputborder2")
let thirdBorder = document.querySelector(".inputborder3")
let fourthBorder = document.querySelector(".inputborder4")

let firstErrorIcon = document.querySelector(".firstnameerror"); 
let lastErrorIcon = document.querySelector(".lastnameerror"); 
let emailErrorIcon = document.querySelector(".emailerror"); 
let passwordErrorIcon = document.querySelector(".passworderror"); 

let firstNameError = document.querySelector(".container__form_main_input_error_first"); 
let lastNameError = document.querySelector(".container__form_main_input_error_last"); 
let emailError = document.querySelector(".container__form_main_input_error_email"); 
let passwordError = document.querySelector(".container__form_main_input_error_password"); 

let btn = document.querySelector(".container__form_main_btn")

btn.addEventListener("click", ()=> {
    let name = firstNameInput.value;
    let lastname = lastNameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    
   
        if(name == "" && lastname == "" && (validateEmail(email) == true || email == "") && password == ""){

        
        firstErrorIcon.classList.remove("hide");
        lastErrorIcon.classList.remove("hide");
        emailErrorIcon.classList.remove("hide");
        passwordErrorIcon.classList.remove("hide");

        firstNameError.classList.remove("hide");
        lastNameError.classList.remove("hide");
        emailError.classList.remove("hide");
        passwordError.classList.remove("hide");

        firstBorder.style.border = "2px solid red";
        secondBorder.style.border = "2px solid red";
        thirdBorder.style.border = "2px solid red";
        fourthBorder.style.border = "2px solid red";
        return;
    }else if(name == ""){
        firstErrorIcon.classList.remove("hide");
        firstNameError.classList.remove("hide");
        firstBorder.style.border = "2px solid red";
        return;
        
    }else if(lastname == ""){
        lastErrorIcon.classList.remove("hide");
        lastNameError.classList.remove("hide");
        secondBorder.style.border = "2px solid red";
       return;
        
    }else if(!validateEmail(email)){
        emailErrorIcon.classList.remove("hide");
        emailError.classList.remove("hide");
        thirdBorder.style.border = "2px solid red";
        return;
        
    }else if(password == ""){
        passwordErrorIcon.classList.remove("hide");
        passwordError.classList.remove("hide");
        fourthBorder.style.border = "2px solid red";
        return;
        
    }else if(name !== ""){
        firstErrorIcon.classList.add("hide");
        firstNameError.classList.add("hide");
        firstBorder.style.border =  "2px solid hsl(246, 25%, 77%)";
        
        
    }else if(lastname !== ""){
        lastErrorIcon.classList.add("hide");
        lastNameError.classList.add("hide");
        secondBorder.style.border = "2px solid hsl(246, 25%, 77%)";
       
        
    }else if(validateEmail(email)){
        emailErrorIcon.classList.add("hide");
        emailError.classList.add("hide");
        thirdBorder.style.border = "2px solid hsl(246, 25%, 77%)";
        
        
    }else if(password !== ""){
        passwordErrorIcon.classList.add("hide");
        passwordError.classList.add("hide");
        fourthBorder.style.border = "2px solid hsl(246, 25%, 77%)";
       
    }


    firstNameInput.value = "";
    lastNameInput.value = "";
     emailInput.value = "";
     passwordInput.value = "";

     firstErrorIcon.classList.add("hide");
     lastErrorIcon.classList.add("hide");
     emailErrorIcon.classList.add("hide");
     passwordErrorIcon.classList.add("hide");

     firstNameError.classList.add("hide");
     lastNameError.classList.add("hide");
     emailError.classList.add("hide");
     passwordError.classList.add("hide");



     firstBorder.style.border = "2px solid hsl(246, 25%, 77%)";
    secondBorder.style.border = "2px solid hsl(246, 25%, 77%)";
    thirdBorder.style.border = "2px solid hsl(246, 25%, 77%)";
    fourthBorder.style.border = "2px solid hsl(246, 25%, 77%)";
    
    
    
    


    

         
    
})


function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}