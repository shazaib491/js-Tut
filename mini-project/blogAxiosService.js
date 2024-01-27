

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
        console.error('Error fetching blog posts:', error);
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
        console.error('Error adding new post:', error);
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
        console.error('Error updating post:', error);
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
        console.error('Error deleting post:', error);
    }
}
