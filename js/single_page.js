
document.addEventListener('DOMContentLoaded', function() {
    

    let singlePostLink = window.location.search.replace('?', '');
    console.log(singlePostLink);


    let userToken = JSON.parse(sessionStorage.getItem('userToken'));
   
    fetch(`http://localhost:3000/xlarge/post/list/${singlePostLink}`, {
  
    method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
        console.log('Success:', data);
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });


});


