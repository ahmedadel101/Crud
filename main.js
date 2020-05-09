let postsData;

var getposts = new Promise(function(resolved, rejected) {

    var request = new XMLHttpRequest();

    /* get Api */
    request.open('get', 'http://localhost:3000/xlarge/post/list');

    request.send();


    request.onload = function() {

        if (request.status == 200) {
            resolved(JSON.parse(request.response));
        } else if (request.status == 404) {
            var error = "No result";
            rejected(error);
        }
    };
});

getposts.then(
    function(data) {
        postsData = data;
        localStorage.setItem('postsData', JSON.stringify(postsData));

        posts();
    },
);




function posts() {

    var temp = '';
    for (var i = 0; i < postsData.length; i++) {

        temp += '<div class=" col-lg-3 col-md-6 col-sm-12"> <div class="api p-3 mt-3"><h4>' + postsData[i].title + '</h4><p> ' + postsData[i].content + ' </p></div></div></div>';

    }
    console.log(postsData);

    document.getElementById("posts").innerHTML = temp;

}


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then(res => {
//         postsData = res;
//         var temp = '';
//         for (var i = 0; i < postsData.length; i++) {

//             temp += '<div class=" col-lg-3 col-md-6 col-sm-12"> <div class="api p-3 mt-3"><h4>' + postsData[i].title + '</h4><p> ' + postsData[i].body + ' </p></div></div></div>';

//         }
//         console.log(postsData);

//         document.getElementById("posts").innerHTML = temp;
//     })
