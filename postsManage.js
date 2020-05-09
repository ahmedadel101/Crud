
$(window).on('load', function(){ 

let postman = document.getElementById('postMan');
let donHave = document.getElementById('donSignUp');

donHave.addEventListener('click', ()=>{
    $('#exampleModalLong').modal('hide');
})



let postManage = [];

postManage = JSON.parse(localStorage.getItem('postsData'));

postman.addEventListener('click', editbtnsAndDell);
AddPosts();

function AddPosts() {
    let temp = '';
    for (let i = 1; i< postManage.length; i++) {

        temp += `<div class=" col-sm-8 m-auto">
                <div class="api p-3 mt-3"><h4>${postManage[i].title}</h4>
                <p>${postManage[i].content}</p>
                </div>
                <div class=" d-flex mt-2 justify-content-center align-items-end">
                <a  data_index="${i}" data_id="${postManage[i].id}" class="editbtn btn text-danger mr-3 btn-warning " >Edit</a>
                <a data_index="${i}" data_id="${postManage[i].id}"  class=" delbtn btn btn-danger text-warning data-toggle="modal" data-target="#exampleModalCenter" >Delete</a>
                </div>
                </div>`
                postman.innerHTML = temp;

    }   
}


function editbtnsAndDell (e) {

    let postId;
    let postIndex;

            if (e.target.classList.contains('delbtn')) {
                postId = e.target.getAttribute('data_id');
                postIndex = e.target.getAttribute('data_index');
                let confirmDelete = document.getElementById('confirm');
                $('#exampleModalCenter').modal('show');

                confirmDelete.addEventListener('click', function (){

                    postManage.splice(postIndex, 1);
                    localStorage["postManage"] = (JSON.stringify(postManage));

                    AddPosts();
                    $('#exampleModalCenter').modal('hide');

                      fetch('http://localhost:3000/xlarge/post/list' + postId, {
                        method: 'DELETE',
                        })
                        .then(res => res.json())
                        .then(res => console.log(res))
                        .catch(error => console.log(error))

                    // let delRequest = new Promise ((resolve,reject) => {
                    //     let request = new XMLHttpRequest;
                    //     request.open('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
                    //     request.send();
                    //     request.onload = () => {
                    //         if (request.status === 200) {
                    //             resolve(Response);
                    //             console.log(request.response);
                    //         }
                    //         else if (request.status === 404){
                    //             let error = 'No posts DELETED'
                    //             reject(error);
                    //         }
                    //     }
                    // });
    
                    // delRequest.then((message) => {
                    //     console.log(message);
                    // }, (error) => {
                    //     console.log(error);
                    // });
                });
            }
            else if (e.target.classList.contains('editbtn')) {
                $('#staticBackdrop').modal('show');

            }
   

        }

    });