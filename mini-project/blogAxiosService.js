// blogService.js
// This file contains functions for performing CRUD operations using Axios with JSON Server.

import axios from 'axios';

// Base URL for the JSON Server
const baseUrl = 'http://localhost:3000/blog';

// Function to get all blog posts
export async function getPosts() {
    try {
        const response = await axios.get(baseUrl);
        return response.data; // Axios automatically parses the JSON response
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

// Function to add a new blog post
export async function addPost(post) {
    try {
        const response = await axios.post(baseUrl, post); // No need to stringify the post
        return response.data;
    } catch (error) {
        console.error('Error adding new post:', error);
    }
}

// Function to update an existing blog post
export async function updatePost(id, updatedPost) {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, updatedPost); // No need to stringify the updated post
        return response.data;
    } catch (error) {
        console.error('Error updating post:', error);
    }
}

// Function to delete a blog post
export async function deletePost(id) {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}

// Note: Ensure JSON Server is running on localhost:3000
