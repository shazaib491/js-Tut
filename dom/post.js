let posts = [];
let postList = document.querySelector("#postList");
let postTitleInput = document.querySelector("#title");
let postBodyInput = document.querySelector("#body");

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

    // update button 
    let updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.setAttribute("class","btn btn-primary")
    // adding dynamic eventlistner from javcript side
    updateButton.addEventListener("click", () => {
      // li.remove();
      findPostById(element.id);
    });

    li.appendChild(updateButton);

    //delete button
    let deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    deletebutton.setAttribute("class","btn btn-primary")
    // adding dynamic eventlistner from javcript side
    deletebutton.addEventListener("click", () => {
      // li.remove();
      deletePost(element.id);
    });

    li.appendChild(deletebutton);

    postList.appendChild(li);
  });
  console.log("postlist afer insert", postList.innerText);
}

function deletePost(id) {
  posts = posts.filter((post) => post.id !== id);
  showPosts();
}

showPosts();
function findPostById(id){
  let result = posts.find(post=>post.id==id);
  postTitleInput.value = result.title;
  postBodyInput.value = result.body;
  console.log(result);
}
