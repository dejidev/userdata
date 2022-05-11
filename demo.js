const url = "https://jsonplaceholder.typicode.com/users";

function fetchUsers() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // PASSING THE USERS TO THE RENDER USERS FUNCTION
        renderUser(data)
    });
}

fetchUsers();


// Render users in the DOM
function renderUser(usersdata){

    const ul = document.getElementById("user-list-container");

    // Render li tg for each of thr users

    usersdata.forEach((user, index ) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span> - </span>
        <span class="username"> ${user.username}</span>
        `

        // append the current li tag to the ul tag
        ul.appendChild(li);
    });

}


// Add a search function to the DOM

function searchUserbyUsername(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toLowerCase();
    const usersList = ul.querySelectorAll("li");

    // loop through all the users and render the ones that matches

    for (let i = 0 ; i < usersList.length ; i++ ) {
        const userSpanTag = usersList[i].querySelector(".username") ;
        const usernameSpanTagValue = userSpanTag.innerText.toLowerCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

        if (isMatch) {
            usersList[i].style.display = "block";
        }else {
            usersList[i].style.display = "none"
        }
    }
}

