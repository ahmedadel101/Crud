
// document.addEventListener('DOMContentLoaded', function() {
    // Get user token from session storage
    let userToken = JSON.parse(sessionStorage.getItem('userToken'));
    

    let userData =[];
    export function getAllUsers(callback, role) {


        fetch(`http://localhost:3000/xlarge/admin/${role}/list`, {
            headers: {
                'x_auth_token_admin': userToken

            },
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            userData = data;
            callback(userData, role)
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
                console.log(token);
                
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
                window.location.href = './dashboard.html';  
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        } 


            
    }

    export function deleteUser(callback) {
        let userTable = document.getElementById('userTable');
        userTable.addEventListener('click', function(e) {
            console.log(e);
            let userId;
            let userIndex
            if (e.target.classList.contains('delBtn')) {
                userId = e.target.getAttribute('user_id');
                userIndex = e.target.getAttribute('user_index');
                userData.splice(userIndex, 1);
                fetch(`http://localhost:3000/xlarge/admin/delete/user/${userId}`, {
                    headers: {
                        'x_auth_token_admin': userToken
        
                    },
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(massage => {
                    console.log('success', massage);
                    callback(userData)
                })
                .catch(error => console.log('Error', error))

            }
            else {
                console.log('Something went wrong');
                
            }
        })
    }
// });
// /xlarge/admin/delete/admin/:id
// xlarge/admin/admin/list


    
    
