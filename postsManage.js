let postman = document.getElementById('postMan');
let btnEdit = document.getElementById('edit');
let confirmDel = document.getElementById('confirmDelete');



let postManage = [];

postManage = JSON.parse(localStorage.getItem('postsData'));

AddPosts();

function AddPosts() {
    let temp = '';
    for (let i = 0; i< postManage.length; i++) {

        temp += `<div class=" col-lg-3 col-md-6 col-sm-12">
                <div class="api p-3 mt-3"><h4>${postManage[i].title}</h4>
                <p>${postManage[i].body}</p>
                </div>
                <div class=" d-flex mt-2 justify-content-center align-items-end">
                <a id="edit" data_index="${i}" data_id="${postManage[i].id}" class="btn text-danger mr-3 btn-warning " >Edit</a>
                <a  onmouseover"dell()"  data_index="${i}" data_id="${postManage[i].id}" class=" dell btn btn-danger text-warning" data-toggle="modal" data-target="#warningModal">Delete</a>
                </div>
                </div>`
                postman.innerHTML = temp;

    }   
}

function dell(){
    $('#warningModal').modal('hide');
    console.log()
}
       

       


        
   

    

