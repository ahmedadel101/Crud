
// document.addEventListener('DOMContentLoaded', function() {
    // Get user token from session storage
    let userToken = JSON.parse(sessionStorage.getItem('userToken'));
    

    let userData =[];
    let adminData =[];
    export function getAllAdmins(callback) {


        fetch(`http://localhost:3000/xlarge/admin/admin/list`, {
            headers: {
                'x_auth_token_admin': userToken

            },
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            adminData = data;
            callback(adminData)
        })
        .catch(error => console.log('Error', error))
    }
    export function getAllUsers(callback) {


        fetch(`http://localhost:3000/xlarge/admin/user/list`, {
            headers: {
                'x_auth_token_admin': userToken

            },
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            userData = data;
            callback(userData)
        })
        .catch(error => console.log('Error', error))
    }

    export function getUserById(id, role, token, callback) {
        if (role == 'user') {

            // request to Get user data by id
            fetch(`http://localhost:3000/xlarge/user/account/${id}`, {
                headers: {
                'x_auth_token_user': token
                },
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                userData = data;
                 // Store user token in session storage
                sessionStorage.setItem('userData', JSON.stringify(userData));
                callback(userData);

            })
            .catch((error) => {
                console.error('Error:', error);
            });

        }
        else if (role == 'admin') {
                
            // request to Get admin data by id
            fetch(`http://localhost:3000/xlarge/admin/account/${id}`, {
                headers: {
                'x_auth_token_admin': token
                },
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                userData = data;
                sessionStorage.setItem('userData', JSON.stringify(userData));
                
                callback(userData); 
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        } 
      
    }

    export function addAdmin(callback, form) {
                form.addEventListener('submit', function(e) {
                e.preventDefault();

        
        // the form data
        const formData = new FormData(this);
       
        fetch('http://localhost:3000/xlarge/admin/add/admin', {
            headers: {
                'x_auth_token_admin': userToken

            },
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            adminData.push(data);
            callback(adminData)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    })
}

    export function delUserOrAdmin(callback, ele, role) {
        ele.addEventListener('click', function(e) {
            let userId;
            let userIndex
            if (e.target.classList.contains('delBtn')) {
                userId = e.target.getAttribute('user_id');
                userIndex = e.target.getAttribute('user_index');
                fetch(`http://localhost:3000/xlarge/admin/delete/${role}/${userId}`, {
                    headers: {
                        'x_auth_token_admin': userToken
        
                    },
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(massage => {
                    console.log('success', massage);
                    if (role == 'user') {

                        userData.splice(userIndex, 1);
                        callback(userData, role)
                    }
                    else if (role == 'admin') {
                        adminData.splice(userIndex, 1);
                        callback(adminData)
                    }

                })
                .catch(error => console.log('Error', error))

        }
        else {
            console.log('Something went wrong');
            
        }
       
    })
}
// // });
// /xlarge/admin/delete/admin/:id
// xlarge/admin/admin/list


    
    
