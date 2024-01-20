// DOM element references
const title = document.querySelector("#title");
const body = document.querySelector("#body");
const display = document.querySelector("#display");

// Initial blog data
let blog = [
  { id: 1, title: "First", body: "This is the first post" },
  { id: 2, title: "Second", body: "This is the second post" },
];

// Current editing post's ID
let currentEditingId = null;

// Function to render blog posts to the display
function show() {
  display.innerHTML = "";

  blog.forEach((post) => {
    const postHTML = `
    <tr>
    <td>${post.title}</td>
    <td>${post.body}</td>
    <td>
        <button class="btn btn-primary " onclick="edit(${post.id})">Edit</button>
        <button class="btn btn-danger " onclick="deleteTask(${post.id})">Delete</button>
    </td>
</tr>
        `;
    display.innerHTML += postHTML;
  });
}

// Function to add or update a blog post
function onSave(e) {
  e.preventDefault();
  const newPost = { title: title.value, body: body.value };

  if (currentEditingId) {
    // Update existing post
    const postIndex = blog.findIndex((post) => post.id === currentEditingId);
    blog[postIndex] = { ...blog[postIndex], ...newPost };
  } else {
    // Add new post
    newPost.id = blog.length + 1; // Simple ID assignment
    blog.push(newPost);
  }

  resetForm();
  show();
}

// Function to set up editing a blog post
function edit(id) {
  const post = blog.find((post) => post.id === id);
  title.value = post.title;
  body.value = post.body;
  currentEditingId = id;
}

// Function to delete a blog post
function deleteTask(id) {
  blog = blog.filter((post) => post.id !== id);
  show();
}

// Function to reset the form fields and editing state
function resetForm() {
  title.value = "";
  body.value = "";
  currentEditingId = null;
}

// Initial render of blog posts
show();
