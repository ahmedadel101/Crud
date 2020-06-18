// Get user token from session storage
let userToken = JSON.parse(sessionStorage.getItem('userToken'));
console.log(userToken);


// Post data 
let postData;
let notApproved;

// Get All Posts func
export function getAllPosts(callback) {
       fetch('http://localhost:3000/xlarge/post/list',{
           method: 'GET'
       })
       .then(res => res.json())
       .then(data => {
           console.log('success', data);
           postData = data
           callback(postData)
           
           if(data.length == 0) {
               console.log('There\'s No Posts Yet');
               
           }
           
       })
       .catch(error => console.log('Error', error))
}

// Get UnApproved Posts
export function getNotApprovedPosts(callback) {
    fetch('http://localhost:3000/xlarge/admin/list/notapproved',{
        headers: {
            'x_auth_token_admin': userToken

        },
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
        console.log('success', data);
        notApproved = data;
        callback(notApproved)
        
        if(data.length == 0) {
            console.log('There\'s No Posts Yet');
            
        }
        
    })
    .catch(error => console.log('Error', error))
}
export function ApprovePost(callAfter, callLater, ele) {
    ele.addEventListener('click', function(e){
            console.log(ele);
            
        
            let postId;
            
            let postIndex
            if (e.target.classList.contains('approvedBtn')) {
                postId = e.target.getAttribute('post_id');
                postIndex = e.target.getAttribute('post_index');

                fetch(`http://localhost:3000/xlarge/admin/approve/post/${postId}`,{
                    headers: {
                        'x_auth_token_admin': userToken

                    },
                    method: 'POST'
                })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    notApproved.splice(postIndex, 1);
                    callAfter(postData)
                    callLater(notApproved)
                    
                    if(data.length == 0) {
                        console.log('There\'s No Posts Yet');
                        
                    }
                    
                })
                .catch(error => console.log('Error', error))
            }
})
}



// edit Post func
// export function editPost(callback, ele) {

//     ele = document.getElementById('postsList');
//     ele.addEventListener('click', function(e){
    
//         let postId;
//         let postIndex
//         if (e.target.classList.contains('editBtn')) {
//             postId = e.target.getAttribute('post_id');
//             postIndex = e.target.getAttribute('post_index');
//             fetch(`http://localhost:3000/xlarge/post/update/${postId}`, {
//                 headers: {
//                     'x_auth_token_user': userToken
    
//                 },
//                 method: 'DELETE'
//             })
//             .then(res => res.json())
//             .then(massage => {
//                 console.log('success', massage);
//                 callback(postData)
                
//             })
//             .catch(error => console.log('Error', error))

//         }
//         else {
//             console.log('Something went wrong');
            
//         }
    
//     })
// }
export function deletePost(callback, ele) {

    ele = document.getElementById('postsList');
    ele.addEventListener('click', function(e){
    
        let postId;
        let postIndex
        if (e.target.classList.contains('delBtn')) {
            postId = e.target.getAttribute('post_id');
            postIndex = e.target.getAttribute('post_index');
            fetch(`http://localhost:3000/xlarge/post/delete/${postId}`, {
                headers: {
                    'x_auth_token_user': userToken
    
                },
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(massage => {
                console.log('success', massage);
                postData.splice(postIndex, 1);
                callback(postData)
                
            })
            .catch(error => console.log('Error', error))

        }
        else {
            console.log('Something went wrong');
            
        }
    
    })
}

// export function getAllSubCategories(callback) {

// }



    
    
