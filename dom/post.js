let posts = [];
let postList = document.querySelector("#postList");
let postTitleInput = document.querySelector("#title");
let postBodyInput = document.querySelector("#body");
let mode = "save";
let postId;

function onFormSubmit(event) {
  event.preventDefault(); //refresh hone se rokh doge
  if (mode == "update") {
    updatePost();
  } else {
    insertPost();
  }
  event.target.reset();
  showPosts();
}

function insertPost() {
  posts.push({
    id: posts.length + 1,
    title: event.target.title.value,
    body: event.target.body.value,
  });
}
function updatePost() {
  let updatePost = posts.find((post) => post.id === postId);
  updatePost.title = event.target.title.value;
  updatePost.body = event.target.body.value;
  mode = "save";
}

function showPosts() {
  postList.innerHTML = ""; //empty
  posts.forEach((element) => {
    let li = document.createElement("li");
    li.textContent = element.title + " " + element.body;
    li.setAttribute("class", 'list-group-item"');
    li.appendChild(addUpdateButton());
    li.appendChild(addDeleteButton());
    postList.appendChild(li);
  });
}

function addUpdateButton() {
  let updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.setAttribute("class", "btn btn-primary");
  // adding dynamic eventlistner from javcript side
  updateButton.addEventListener("click", () => {
    findPostById(element.id);
  });
  return updateButton;
}

function addDeleteButton() {
  //delete button
  let deletebutton = document.createElement("button");
  deletebutton.textContent = "Delete";
  deletebutton.setAttribute("class", "btn btn-primary");
  // adding dynamic eventlistner from javcript side
  deletebutton.addEventListener("click", () => {
    // li.remove();
    deletePost(element.id);
  });
  return deletebutton;
}
function deletePost(id) {
  posts = posts.filter((post) => post.id !== id);
  showPosts();
}

showPosts();
function findPostById(id) {
  let result = posts.find((post) => post.id == id);
  postTitleInput.value = result.title;
  postBodyInput.value = result.body;
  postId = result.id;
  mode = "update";
}
