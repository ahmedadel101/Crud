import { getUserById } from './users.js'

document.addEventListener('DOMContentLoaded', function() {
    
    let userCard = document.getElementById('userCard');
    let login_btn = document.getElementById('login_btn');
    let loginPop = document.getElementById('loginPop');
    let profileMenu = document.getElementById('blog_profile_div');

    authSignIn(displayUserData);
    authSignup();
    authSignOut();
    // resetPassword();
    authValidationForm();

    // validate form
    function authValidationForm() {

        // Validate username inputs
        const validUserName = document.getElementsByName('name');
        let userNameRegex = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/

        validUserName.forEach(item => {

            item.addEventListener('blur', () => {

                // Regular Expression For Valid
                console.log(userNameRegex.test(item.value));
                
                // For Store alert message
                let errorMsg = '';
                        
                // Check if input value not empty
                if (!item.value) {
    
                    item.nextElementSibling.style.display = "block";
                    errorMsg ='this field is required';
        
                }
                // Check if input value match regex rules
                else if (userNameRegex.test(item.value) == false) {
                    item.nextElementSibling.style.display = "block";
                    errorMsg = 'This name is invalid';
                }
        
                // Put error message text in alert div
                item.nextElementSibling.innerText = errorMsg;
            }); 
        });

        // Validate phoneNumber inputs
        const validPhoneNumber = document.getElementsByName('phone');

        validPhoneNumber.forEach(item => {

            // Regular Expression For Valid
            let phoneRegex = /^(\d{11}){1}?$/

            item.addEventListener('blur', () => {

                // For Store alert message
                let errorMsg = '';
                        
                // Check if input value not empty
                if (!item.value) {
    
                    item.nextElementSibling.style.display = "block";
                    errorMsg ='this field is required';
        
                }
                // Check if input value match regex rules
                else if (phoneRegex.test(item.value) == false) {
                    item.nextElementSibling.style.display = "block";
                    errorMsg = 'This number is invalid';
                }
        
                // Put error message text in alert div
                item.nextElementSibling.innerText = errorMsg;
            });
           
        });
        // Validate Age inputs
        const validAge = document.getElementsByName('Age');

        validAge.forEach(item => {

            item.addEventListener('blur', () => {

                // Regular Expression For Valid
                let ageRegex = /^(\d{2}){1}?$/
                
                // For Store alert message
                let errorMsg = '';
                        
                // Check if input value not empty
                if (!item.value) {
    
                    item.nextElementSibling.style.display = "block";
                    errorMsg ='this field is required';
        
                }
                // Check if input value match regex rules
                else if (ageRegex.test(item.value) == false) {
                    item.nextElementSibling.style.display = "block";
                    errorMsg = 'This Age is invalid';
                }
        
                // Put error message text in alert div
                item.nextElementSibling.innerText = errorMsg;
            });
          
        });
            
            
        // Validate email inputs
        const validEmail = document.getElementsByName('email');

        validEmail.forEach(item => {
            
            item.addEventListener('blur', () => {

            // Regular Expression For Valid
            let emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            // For Store alert message
            let errorMsg = '';
                    
            // Check if input value not empty
            if (!item.value) {

                item.nextElementSibling.style.display = "block";
                errorMsg ='this field is required';
    
            }
            // Check if input value match regex rules
            else if (emailRegex.test(item.value) == false) {
                item.nextElementSibling.style.display = "block";
                errorMsg = 'This email is invalid';
            }
    
            // Put error message text in alert div
            item.nextElementSibling.innerText = errorMsg;
            });
                
        });
        
        // Validate Password input
        const passValid = document.getElementsByName('password');
        
        passValid.forEach(item => {

            item.addEventListener('blur', () => {
                
                // Regular Expression For Valid
                let passRegex = /^[A-Za-z0-9]\w{6,16}$/
                
                // For Store alert message
                let errorMsg = '';
    
                // Check if input value not empty
                if (!item.value) {

                    item.nextElementSibling.style.display = "block";
                    errorMsg ='Password is required';
                }
                
                // Check if input value length not < 6 or > 12 chars
                else if (item.value.length < 6 || item.value.length > 16) {
                    item.nextElementSibling.style.display = "block";
                    errorMsg = 'password Should be Min. 6 chars & Max. 12 chars';
                }
    
                // Check if input value match regex rules
                else if (passRegex.test(item.value) == false) {
                    item.nextElementSibling.style.display = "block";
                    errorMsg = 'Password may have Letters, numeric & special character';
                }
                // Put error message text in alert div
                item.nextElementSibling.innerText = errorMsg;

            });

        });

        // reset alert display
        const inputs = document.getElementsByTagName('input');
            
        for (let input of inputs) {
                input.addEventListener('focus', () => {
                    
                    if(input.nextElementSibling && input.nextElementSibling.classList.contains('alert')) {
                        input.nextElementSibling.style.display = "none";
                }
            });
        }
 
    }

    function authSignup() {
                            
        // the sign up form
        let signUpForm = document.getElementById('signUpForm');

        signUpForm.addEventListener('submit', function (e) {
             
           e.preventDefault();

            // the form data
            const formData = new FormData(this);
           
            
            fetch('http://localhost:3000/xlarge/user/signup', {
                
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

            loginPop.style.display = 'none';
            
        })
    }


    function authSignIn(callback) {

        let userData;

        if (sessionStorage.getItem("userData") == null) {
        userData = [];
        }

        else {
            userData = JSON.parse(sessionStorage.getItem("userData"));
            // console.log(userData);
            displayUserData(userData);
        }

        // the sign in form
        let signInForm = document.getElementById('signInForm');
        

        signInForm.addEventListener('submit', function (e) {

            e.preventDefault();

            let signInData = {
                email: this.email.value,
                password: this.password.value
            }

        
            fetch('http://localhost:3000/xlarge/login', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(signInData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                

                // Store user token in session storage
                sessionStorage.setItem('userToken', JSON.stringify(data.token));

                // Get user id
                let userId = data.id;
                let userRole = data.role;
                let userToken = data.token;
                console.log(`user id is ${userId}`); // this is work
                console.log(`user token is ${userToken}`); // this is work
                console.log(`user role is ${userRole}`); // this is work
                getUserById(userId, userRole, userToken, callback)

            }) //End of user data request

            .catch((error) => {
                console.error('Error:', error);
            });

            login_btn.style.display = 'none';
            loginPop.style.display = 'none';

        });
    }

    function authSignOut() {
        let userLogout = document.getElementById('userLogout');
        userLogout.addEventListener('click', function () {
            sessionStorage.removeItem('userData');
            sessionStorage.removeItem('userToken');
            login_btn.style.display = 'block';
            userCard.style.display = 'none';
            profileMenu.style.display = 'none';
            location.reload();

        })
    }

        // function resetPassword() {

        // }

})


// Display user data after sign in
function displayUserData(data) {

    let temp = `<a href="#">
        <img src="${data.img}" class="img-fluid" alt="">
         ${data.name}<i class="fa fa-angle-down" aria-hidden="true"></i>
         </a>`
         
    login_btn.style.display = 'none';
    userCard.innerHTML = temp;

    
    
}