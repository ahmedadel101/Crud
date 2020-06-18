// http://localhost:3000/xlarge/post/create/web Api For Web Category 
// http://localhost:3000/xlarge/post/create/Competitiveprogramming Api For Competitiveprogramming  Category 
// http://localhost:3000/xlarge/post/create/Opensource Api For Opensource Category



let selc = document.getElementById('selcCategory');
let webPosts = document.getElementById('postsForWeb');
let userToken = JSON.parse(sessionStorage.getItem("userToken"));
let obj = { category: "" }
let categoryData = [];
let categoryId = [];
let idCat = [];
let supCat = document.getElementById("supCat");
let selcValue

AddPosts();

function AddPosts(callback) {

    selc.addEventListener('change', function() {

        selcValue = selc.value;
        fetch(`http://localhost:3000/xlarge/admin/categories/${selcValue}`, {
                headers: {
                    'x_auth_token_user': userToken
                },
                method: "GET",

            })
            .then(res => res.json())
            .then(data => {
                data.map(item => {
                    // console.log(item)
                    let nameCat = item.name;
                    // console.log(nameCat);
                    // idCat.push(item._id);
                    // console.log(idCat);
                    let option = document.createElement("option");
                    option.text = nameCat
                    webPosts.add(option);

                })

                webPosts.addEventListener('change', function(e) {
                    data.map(item2 => {
                        if (item2.name == e.target.value) {
                            console.log(item2._id)
                            supCat.value = item2._id;

                        }


                    })
                })


                // console.log(data)
                // data.map(item => {
                //     categoryData.push(item.name),
                //         categoryId.push(item._id)
                // })
                // callback(categoryData, categoryId);
                // console.log(categoryData);

            })



        .catch(error => console.log(error))

    })

    let createdby = document.getElementById('createdby');
    // get item from sessionStorage ;
    let idUserPost = JSON.parse(sessionStorage.getItem("userData"));
    createinp = idUserPost._id;
    // then print in createdby input ;
    createdby.value = createinp;
    //Start Event Sumbit Form AddPost ;
    let AddPostCategores = document.getElementById('addPost');
    //Event For Submit Posts Form ;
    AddPostCategores.addEventListener('submit', function(e) {

        e.preventDefault();
        // Get User Token From SessionStorage;
        let userToken = JSON.parse(sessionStorage.getItem('userToken'))

        // FromData = names Inputs;
        const formData = new FormData(this);
        for (pair of formData) {
            console.log(pair)
        }

        fetch(`http://localhost:3000/xlarge/post/create/${selcValue}`, {
                headers: {
                    'x_auth_token_user': userToken
                },
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(res => {
                console.log('Success:', res);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    })
}

// function displayNameCategory(categories) {



//     for (category of categories) {
//         // let option = document.createElement("option");
//         // option.text = category
//         // webPosts.add(option)
//         // for (let i = 0; i > catIdes.length; i++) {
//         //     category[i] = catIdes[i];
//         //     console.log(category);

//         // }
//         // for (cat of catIdes) {
//         //     category = cat
//         // }

//     }
// }

// function catIdes(categoryId) {



// }







// for (const [i, category] of categories.entries()) {
//     let option = document.createElement("option");
//     option.text = category
//     webPosts.add(option)
//         // for (let i = 0; i > catIdes.length; i++) {
//         //     category[i] = catIdes[i];
//         //     console.log(category);

//     // }
//     // for (cat of catIdes) {
//     //     category = cat
//     // }

// }




















// set securekey=mysecurekey ; For Open Node.js