   

    // the sign up form
    let signUpForm = document.getElementById('signUpForm');

    signUpForm.addEventListener('submit', function (e) {
        console.log(signUpForm);
        console.log(this);
        
        
        e.preventDefault();

        // the form data
        const formData = new FormData(this);
        console.log(formData);
        for(let pair of formData) {
            console.log(pair); 
        }
        
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
        
    })

   

    
    // the sign in form
    let signInForm = document.getElementById('signInForm');

    signInForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let signInData = {
            email: this.email.value,
            password: this.password.value
        }
        console.log(signInData);

    
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
            console.log(`user id is ${userId}`); // this is work

            // request to Get user data by id
        fetch(`http://localhost:3000/xlarge/user/account/${userId}`,
        {method: 'GET'})
        .then(response => response.json())
        .then(userData => {
            console.log('Success:', userData);
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });
            
        }) //End of user data request

        .catch((error) => {
            console.error('Error:', error);
        });

        

        
    });


    let createPosts = document.getElementById('createPostForm');
    createPosts.addEventListener('submit', function (e) {
            e.preventDefault();
            let createPost = {
                title: this.title.value,
                content: this.content.value,
                category: this.category.value
            }
            console.log(createPost) 
        fetch('http://localhost:3000/xlarge/post/create/Miscellaneousfields', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(createPost),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
    })