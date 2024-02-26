
function loadposts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        console.log(post)
        postDiv.innerHTML = `
        <h4>User ID : ${post.userId}</h4>
        <h5>Post Title : ${post.title}</h5>
        <p>Post Description : ${post.body}</p>
        `;
        postContainer.appendChild(postDiv)
    }
}
loadposts();