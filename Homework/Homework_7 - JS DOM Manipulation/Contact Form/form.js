
const form = document.getElementById('form');
const userName = document.getElementById('user-name');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const text = document.getElementById('text');
const banner = document.getElementById('banner');


form.addEventListener('submit', (event) => {
    // prevent the form from submitting
    event.preventDefault();

    validateInput();    

    // Sending the Form data in the console
    const formData = new FormData();

    formData.append('First Name:', firstName.value );
    formData.append('Last name:', lastName.value );
    formData.append('Text message:', text.value);

    console.log(...formData);


})




function validateInput() {
    // Checking if firstName is empty
    if(firstName.value.trim()==="" ){
        onError(firstName, "First Name cannot be empty");
        firstName.focus();
    } else {
        onSucces(firstName);

    }

     // Checking if lastName is empty
     if(lastName.value.trim()===""){
        onError(lastName, "Last Name cannot be empty");
        firstName.focus();
        return false;
    }

    else {
        onSucces(lastName);
    }
    // Checking if text is empty
    if(text.value.trim()===""){
        onError(text, "Text cannot be empty");
        text.focus();
        return false;
    }
    else {
        onSucces(text);
    }

    return showConfirmBanner();
}

function onSucces(input){
    let parent = input.parentElement;
    let messageElem = parent.querySelector("small");
        messageElem.style.visibility="hidden";
        messageElem.innerText="";
        parent.classList.remove("error");
        parent.classList.add("success");
}

function onError(input, message){
    let parent = input.parentElement;
    let messageElem = parent.querySelector("small");
        messageElem.style.visibility="visible";
        messageElem.innerText=message;
        parent.classList.add("error");
        parent.classList.remove("success");
}

// Making the banner visible
function showConfirmBanner(){
    banner.style.visibility="visible";
    userName.innerText = firstName.value;
}


//  "X"  banner button -- Reset Form 
function resetForm() {
    form.reset();
    banner.style.visibility="hidden";

}








