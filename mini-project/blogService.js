
// Below are the functions that interact with the JSON Server

/**
 * Retrieves all blog posts from the server.
 * This function makes a GET request to the JSON Server and returns the response as JSON.
 * It's used to fetch the current list of blog posts.
 */
async function getPosts() {
    try {
        const response = await fetch(baseUrl);
        return await response.json();
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

/**
 * Adds a new blog post to the server.
 * This function sends the new post data to the server using a POST request,
 * and then returns the newly added post as JSON.
 */
async function addPost(post) {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        return await response.json();
    } catch (error) {
        console.error('Error adding new post:', error);
    }
}

/**
 * Updates an existing blog post.
 * This function sends the updated post data to the server using a PUT request.
 * It replaces the entire post at the specified ID with the new data.
 */
async function updatePost(id, updatedPost) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPost)
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating post:', error);
    }
}

/**
 * Deletes a blog post from the server.
 * This function sends a DELETE request to the server for the specified post ID.
 */
async function deletePost(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}
