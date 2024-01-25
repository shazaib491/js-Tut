// Importing the functions from blogService.js
import { getPosts, addPost, updatePost, deletePost } from './blogService.js';

// DOM element references
const title = document.querySelector("#title");
const body = document.querySelector("#body");
const display = document.querySelector("#display");

// Current editing post's ID
let currentEditingId = null;

// Function to render blog posts to the display
async function show() {
    try {
        const posts = await getPosts(); // Fetching posts using the API
        display.innerHTML = ""; // Clearing the display

        posts.forEach(post => {
            const postHTML = `
                <tr>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                    <td>
                        <button class="btn btn-primary" onclick="edit(${post.id})">Edit</button>
                        <button class="btn btn-danger" onclick="deleteTask(${post.id})">Delete</button>
                    </td>
                </tr>`;
            display.innerHTML += postHTML;
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Function to handle form submission for adding/updating a post
async function onSave(e) {
    e.preventDefault();
    const post = { title: title.value, body: body.value };

    try {
        if (currentEditingId) {
            await updatePost(currentEditingId, post); // Updating the post
        } else {
            await addPost(post); // Adding a new post
        }
        resetForm();
        await show();
    } catch (error) {
        console.error('Error saving post:', error);
    }
}

// Function to set up editing a blog post
async function edit(id) {
    try {
        const posts = await getPosts();
        const post = posts.find(p => p.id === id);
        title.value = post.title;
        body.value = post.body;
        currentEditingId = id;
    } catch (error) {
        console.error('Error fetching post:', error);
    }
}

// Function to delete a blog post
async function deleteTask(id) {
    try {
        await deletePost(id);
        await show();
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}

// Function to reset the form fields and editing state
function resetForm() {
    title.value = "";
    body.value = "";
    currentEditingId = null;
}

// Initial render of blog posts
show();
