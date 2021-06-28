// On page load, pull the users endpoint from https://jsonplaceholder.typicode.com/users using XHR
// (function() {Win.UI.Pages.define("/XHRUserList/index.html",{
//     ready: function(element, option){
    const xhr = XMLHttpRequest;
        console.log(this);
    
        var userList = document.getElementById("userList");
        // Winjs.xhr({url:'https://jsonplaceholder.typicode.com/users', headers: {Accept: "jsonplaceholder"}}).then(function(xhr) {
        //         var userList =  jsonplaceholder.parse(xhr.response).d;
        // //         .map(function (r){return r.id})
        //     }
        // );
        xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
        xhr.sent();

// Generate the table of users for #usersTable (include a button/link in the fourth column to let you view an individual record)

// If a button/link in the table is clickyed, populate #userView with the full details of the user.
// (bonus points if you make it a nice form as if the user was editable)