
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
var displayCheckedAvatar = [];

var inputValues = [];




form.addEventListener('submit', (event) => {
    // prevent the form from submitting
    event.preventDefault();

    // Validate all form elements and create comment box
    if (validateInput()){
        console.log('Form not valid');
    } else {
        console.log('Form is good for new Comment div');

        // Display Comments Function
        function DisplayComments(name, comment, mail, avatar){
            this.name = name;
            this.comment = comment;
            this.mail = mail;
            this.avatar = avatar;
        }

        let comment = new DisplayComments(nameInput.value,commentInput.value,mailInput.value, displayCheckedAvatar)
        console.log(comment.name);

        var container = document.querySelector('.comment-container');

        // If needed you can empty the div 
        // container.innerHTML = '';

        var card = document.createElement('ul');
        card.style.listStyle = 'none';


        // Closing button
        var clearButton = document.createElement('button');
        clearButton.id = '#clear-button';
        clearButton.innerHTML = '<i class="fa fa-remove"></i>';
 


        card.appendChild(clearButton);


      
        card.classList.add('card');
        card.style.display = 'flex';
        card.innerHTML += '<h3>' + comment.name + '</h3>';
        card.innerHTML +='<p>' + comment.comment + '</p>';
        card.innerHTML +='<p>' + comment.mail + '</p>';

    


        // Make card
        container.appendChild(card);
                                        


        // Saving new comment in an array, for storring
        inputValues.push(comment);
        // console.log(inputValues);


    }
    
})





// Form Validation
function validateInput(){
    // Checking if inputs are empty
    if(nameInput.value.trim()==="" || commentInput.value.trim()==="" || ValidateEmail(mailInput) == true || returnCheckedAvatar() !== true){
        nameInput.style.border = "1px solid red";
        commentInput.style.border = "1px solid red";
        mailInput.style.border = "1px solid red";

        console.log("Please verify to have a valid input");

    } else {
        nameInput.style.border = "1px solid green";
        commentInput.style.border = "1px solid green";
        mailInput.style.border = "1px solid green";
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
// WORK IN PROGRESS --- Displaying the returned checked avatar!
function returnCheckedAvatar(){
    if (avatar1.checked ){
        console.log("Avatar ok1");
        // Save chacked radio button
        checkedAvatar = avatar1.checked;
        
        
    } else if (avatar2.checked ){
        console.log("Avatar ok2");
        checkedAvatar = avatar2.checked;
        
    } else if (avatar3.checked ){
        console.log("Avatar ok3");
        checkedAvatar = avatar3.checked;
        
    } else if (avatar4.checked ){
        console.log("Avatar ok4");
        checkedAvatar = avatar4.checked;

    } else if (avatar5.checked ){
        console.log("Avatar ok5");
        checkedAvatar = avatar5.checked;

    } else {
        alert('Please choose an avatar')
    }
    // Return if radio button is checked
    return checkedAvatar;
}
