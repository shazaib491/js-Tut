// DOM element references
const title = document.querySelector("#title");
const body = document.querySelector("#body");
const display = document.querySelector("#display");

// Base URL for the JSON Server, assuming it's running on localhost port 3000
const baseUrl = "http://localhost:3000/blogs";

// Current editing post's ID
let currentEditingId = null;

/**
 * Fetches and displays blog posts.
 * This function retrieves the blog posts from the server and updates the display element with the posts.
 * It's used to refresh the list of posts every time there's a change.
 */
async function show() {
  try {
    const posts = await getPosts(); // Fetching posts using the API
    display.innerHTML = ""; // Clearing the display before adding new post information

    // Looping through each post and appending its HTML to the display element
    if (posts.length) {
      posts.forEach((post) => {
        const postHTML = `
                    <tr>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                        <td>
                            <button class="btn btn-primary" onclick="edit('${post.id}')">Edit</button>
                            <button class="btn btn-danger" onclick="deleteTask('${post.id}')">Delete</button>
                        </td>
                    </tr>`;
        display.innerHTML += postHTML;
      });
    } else {
      display.innerHTML +=
        "<tr><td colspan='2' class='text-center' >No record Found</td><tr>";
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

/**
 * Handles form submissions for adding or updating posts.
 * This function either adds a new post or updates an existing one, based on the currentEditingId state.
 * It prevents the default form submission behavior, sends data to the server, and then refreshes the post list.
 */
async function onSave(e) {
  e.preventDefault();
  const post = { title: title.value, body: body.value };

  try {
    if (currentEditingId) {
      await updatePost(currentEditingId, post);
    } else {
      await addPost(post);
    }
    resetForm();
    await show();
  } catch (error) {
    console.error("Error saving post:", error);
  }
}

/**
 * Prepares the form for editing a post.
 * This function sets up the form with the data from the post to be edited.
 * It finds the post by ID, fills the form fields, and sets the currentEditingId.
 */
async function edit(id) {
  try {
    const posts = await getPosts();
    const post = posts.find((p) => p.id == id);
    title.value = post.title;
    body.value = post.body;
    currentEditingId = id;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
}

/**
 * Deletes a blog post.
 * This function sends a delete request to the server for the specified post ID,
 * then refreshes the list of posts.
 */
async function deleteTask(id) {
  try {
    await deletePost(id);
    await show();
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

/**
 * Resets the form fields and clears the current editing state.
 * This function is used to clear the form after adding or editing a post,
 * and resets the currentEditingId to null.
 */
function resetForm() {
  title.value = "";
  body.value = "";
  currentEditingId = null;
}

// Initial rendering of blog posts
show();

// Below are the functions that interact with the JSON Server using Axios

/**
 * Retrieves all blog posts from the server.
 * Axios simplifies the process of making HTTP requests.
 * This function makes a GET request to the JSON Server and returns the response data.
 */
async function getPosts() {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
}

/**
 * Adds a new blog post to the server.
 * This function uses Axios to send the new post data using a POST request.
 * Axios automatically sets the content type and converts the JavaScript object to JSON.
 */
async function addPost(post) {
  try {
    const response = await axios.post(baseUrl, post);
    return response.data;
  } catch (error) {
    console.error("Error adding new post:", error);
  }
}

/**
 * Updates an existing blog post.
 * This function uses Axios to send the updated post data with a PUT request.
 * Axios takes care of the necessary headers and data serialization.
 */
async function updatePost(id, updatedPost) {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
  }
}

/**
 * Deletes a blog post from the server.
 * This function uses Axios to send a DELETE request.
 * It's a straightforward way to handle HTTP DELETE requests.
 */
async function deletePost(id) {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}
