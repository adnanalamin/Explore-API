function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUsers2(data));
}

function displayUsers2(data){
    const ul = document.getElementById('users-list');
    for(let users of data){
        const name = document.createElement('li');
        const email = document.createElement('li');
        name.innerText = users.name;
        email.innerText = users.email;
        ul.appendChild(name);
        ul.appendChild(email);
    }
}
