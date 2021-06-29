// On page load, pull the users endpoint from https://jsonplaceholder.typicode.com/users using XHR
function getEl(id) {
    return document.getElementById(id);
}
    let userInfo = [];
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        userInfo = JSON.parse(xhr.response);
            console.log (userInfo);

    for(let i = 0; i< userInfo.length; i++){
        let userId = userInfo[i].id;
        let userName = userInfo[1].name;
        let userEmail = userInfo[1].email;
        
        let populate=`<tr><td>${userId}</td> <td>${userName}</td> <td>${userEmail}</td> <td><button type='button'>View</button></td></tr>`;

    getEl('userList').innerHTML += populate;
    }
}
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users' ); 
        xhr.send();


        window.addEventListener('DOMContentLoaded', (event) => {
            getEl('userList').addEventListener('click');
            console.log(event.target.parentNode.parentNode.children [0].innerText); 
        });





// Generate the table of users for #usersTable (include a button/link in the fourth column to let you view an individual record)
//if(event.target.nodeName == 'BUTTON') {console.log(event.target.id); let getId = event.target.id;

let viewXhr = new XMLHttpRequest(); 
let userView = []
viewXhr.onload = function(){
    userView = JSON.parse(viewXhr.responseText); 
    let populate = `<p>${userView}</p>`
    document.getElementById('userView').innerHTML += populate;
};
    console.log(userView)
    viewXhr.open( 'GET', 'https://jsonplaceholder.typicode.com/users/', true); 
    viewXhr.send();
    // for(let i = 0; i< userView.length; i++){
    //     let userAddress = userInfo[i].address;
    //     let userPhone = userInfo[1].phone;
    //     let userCompany = userInfo[1].company;
    //     let userWedsite = userInfo[1].website;

// If a button/link in the table is clickyed, populate #userView with the full details of theS user.
// (bonus points if you make it a nice form as if the user was editable)