
// getting the input values from the user

const form = document.getElementById('form');

const nameInput = document.querySelector('#name-box');
const commentInput = document.querySelector('#comment-box');
const mailInput = document.querySelector('#mail-box');

const avatar1 = document.querySelector('#avatar-1');
const avatar2 = document.querySelector('#avatar-2');
const avatar3 = document.querySelector('#avatar-3');
const avatar4 = document.querySelector('#avatar-4');
const avatar5 = document.querySelector('#avatar-5');

var checkedAvatar;


form.addEventListener('submit', (event) => {
    // prevent the form from submitting
    event.preventDefault();

    // Validate all form elements and create comment box
    if (!validateInput()){
        console.log('Form not valid');
    } else {
        console.log('Form is good for new Comment div');
        displayComments(name, comment, mail, avatar );
        
        // One function to create the div
        
        // get ul id - make it ""

        // add a listitem with div inside class - comment box (flex + column) 
        // div avatar + name input (h3) (flex + row) + mail (smaller gray)
        // div comment text - wide and hight fixed
        // div reply button
    }

})



// Form Validation
function validateInput(){
    // Checking if inputs are empty
    if(nameInput.value.trim()==="" || commentInput.value.trim()==="" || ValidateEmail(mailInput) === false || returnCheckedAvatar() !== true){
        nameInput.style.border = "1px solid red";
        commentInput.style.border = "1px solid red";
        mailInput.style.border = "1px solid red";

        console.log("NOT GOOD");

    } else {
        nameInput.style.border = "1px solid green";
        commentInput.style.border = "1px solid green";
        mailInput.style.border = "1px solid green";
        console.log('Avatar is checked');
        console.log("All imputs are good");
        return true;
    }


}



// Mail Validation
function ValidateEmail(mail) 
        {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailInput.value))
        {
            return (true)
        
        }
            return (false)
        }


// Checking if any Avatar is selected
function returnCheckedAvatar(){
    if (avatar1.checked ){
        console.log("Avatar ok1");
        // Save chacked radio button
        checkedAvatar = avatar1.checked;
        // **************De adaugat icoana in dvi-ul de commnent 
        console.log(checkedAvatar);
    } else if (avatar2.checked ){
        console.log("Avatar ok2");
        checkedAvatar = avatar2.checked;
        console.log(checkedAvatar);
    } else if (avatar3.checked ){
        console.log("Avatar ok3");

        checkedAvatar = avatar3.checked;
        console.log(checkedAvatar);
    } else if (avatar4.checked ){
        console.log("Avatar ok4");

        checkedAvatar = avatar4.checked;
        console.log(checkedAvatar);
    } else if (avatar5.checked ){
        console.log("Avatar ok5");

        checkedAvatar = avatar5.checked;
        console.log(checkedAvatar);
    } else {
        alert('Please choose an avatar')
    }
    // Return if radio button is checked
    return checkedAvatar;
}

// post.addEventListener("click", function(){
//     var commentBoxValue = document.getElementById("comment-box").value;
 
//     var li = document.createElement("li");
//     var text = document.createTextNode(commentBoxValue);
//     li.appendChild(text);
//     document.getElementById("unordered").appendChild(li);
 
// });

