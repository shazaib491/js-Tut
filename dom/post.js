let posts = [];
let postList = document.querySelector("#postList");

function onFormSubmit(event) {
  event.preventDefault();
  posts.push({
    id: posts.length + 1,
    title: event.target.title.value,
    body: event.target.body.value,
  });
  console.log(posts);
  event.target.reset();
  showPosts();
}

function showPosts() {
  console.log("postlist before clear", postList.innerText);
  // ul > li array has one record
  postList.innerHTML = ""; //empty
  console.log("postlist afer clear", postList.innerText);

  posts.forEach((element) => {
    //[1]

    let li = document.createElement("li");
    li.textContent = element.title + " " + element.body;
    li.setAttribute("class", 'list-group-item"');

    let button = document.createElement("button");
    button.textContent = "Delete";
    button.setAttribute("class","btn btn-primary")
    // adding dynamic eventlistner from javcript side
    button.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(button);

    postList.appendChild(li);
  });
  console.log("postlist afer insert", postList.innerText);
}

function deletePost(id) {
  posts = posts.filter((post) => post.id !== id);
  showPosts();
}

showPosts();
