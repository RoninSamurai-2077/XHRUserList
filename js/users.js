// On page load, pull the users endpoint from https://jsonplaceholder.typicode.com/users using XHR
function getEl(id) {
    return document.getElementById(id);
}
    let userInfo = [];
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        userInfo = JSON.parse(this.responseText);
            console.log (userInfo);

    for(let i = 0; i< userInfo.length; i++){
        let userId = userInfo[i].id;
        let userName userInfo[1].names;
        let userEmail userInfo[1].emails;
        
        let populate=`<tr><td>${userId}</td> <td>${userliane}</td> <td>${userEmail}</td> <td><button type='button'>View</button></td></tr>`;

            getEl('userList').innerHTML + populate;

         xhr.open('GET', 'https://jsonplaceholder.typicode.com/users' ); xhr.send();

getEl('userList').addEventListener('click", function(event){

console.log(event.target.parentNode.parentNode.children [0].innerText); if(event.target.nodeName 'BUTTON'>
    }
}
            xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
        xhr.sent();

        getEl('userList').addEventListener('click', function(event){
            console.log()
        }

// Generate the table of users for #usersTable (include a button/link in the fourth column to let you view an individual record)

// If a button/link in the table is clickyed, populate #userView with the full details of the user.
// (bonus points if you make it a nice form as if the user was editable)