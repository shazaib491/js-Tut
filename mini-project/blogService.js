// blogService.js
// This file contains functions for performing CRUD operations using Fetch API with JSON Server.

// Base URL for the JSON Server, assuming it's running on localhost port 3000
const baseUrl = 'http://localhost:3000/blog';

// Function to get all blog posts
export async function getPosts() {
    try {
        const response = await fetch(baseUrl); // Making a GET request to the JSON Server
        return await response.json(); // Converting the response to JSON
    } catch (error) {
        console.error('Error fetching blog posts:', error); // Log any errors that occur
    }
}

// Function to add a new blog post
export async function addPost(post) {
    try {
        const response = await fetch(baseUrl, { // Making a POST request to the JSON Server
            method: 'POST', // Specifying the method as POST
            headers: {
                'Content-Type': 'application/json' // Setting the content type as JSON
            },
            body: JSON.stringify(post) // Converting the post object to a JSON string
        });
        return await response.json(); // Parsing the response to JSON
    } catch (error) {
        console.error('Error adding new post:', error); // Log any errors that occur
    }
}

// Function to update an existing blog post
export async function updatePost(id, updatedPost) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, { // Making a PUT request to the JSON Server
            method: 'PUT', // Specifying the method as PUT
            headers: {
                'Content-Type': 'application/json' // Setting the content type as JSON
            },
            body: JSON.stringify(updatedPost) // Converting the updated post to a JSON string
        });
        return await response.json(); // Parsing the response to JSON
    } catch (error) {
        console.error('Error updating post:', error); // Log any errors that occur
    }
}

// Function to delete a blog post
export async function deletePost(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, { // Making a DELETE request to the JSON Server
            method: 'DELETE' // Specifying the method as DELETE
        });
        return await response.json(); // Parsing the response to JSON
    } catch (error) {
        console.error('Error deleting post:', error); // Log any errors that occur
    }
}

// Note: Ensure JSON Server is running on localhost:3000

/**
 * 
Sure, let's go through the complete code for blogService.js with explanations in both English and Hinglish.

blogService.js
This file contains functions to interact with a JSON Server for CRUD operations on blog posts.

javascript
Copy code
// blogService.js
// This file contains functions for performing CRUD operations using Fetch API with JSON Server.

// Base URL for the JSON Server, assuming it's running on localhost port 3000
const baseUrl = 'http://localhost:3000/blog';

// Function to get all blog posts
export async function getPosts() {
    try {
        const response = await fetch(baseUrl); // Making a GET request to the JSON Server
        if (!response.ok) { // Checking if the response is not successful
            throw new Error('Network response was not ok'); // If not successful, throw an error
        }
        return await response.json(); // Converting the response to JSON
    } catch (error) {
        console.error('Error fetching blog posts:', error); // Log any errors that occur
    }
}

// Function to add a new blog post
export async function addPost(post) {
    try {
        const response = await fetch(baseUrl, { // Making a POST request to the JSON Server
            method: 'POST', // Specifying the method as POST
            headers: {
                'Content-Type': 'application/json' // Setting the content type as JSON
            },
            body: JSON.stringify(post) // Converting the post object to a JSON string
        });
        return await response.json(); // Parsing the response to JSON
    } catch (error) {
        console.error('Error adding new post:', error); // Log any errors that occur
    }
}

// Function to update an existing blog post
export async function updatePost(id, updatedPost) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, { // Making a PUT request to the JSON Server
            method: 'PUT', // Specifying the method as PUT
            headers: {
                'Content-Type': 'application/json' // Setting the content type as JSON
            },
            body: JSON.stringify(updatedPost) // Converting the updated post to a JSON string
        });
        return await response.json(); // Parsing the response to JSON
    } catch (error) {
        console.error('Error updating post:', error); // Log any errors that occur
    }
}

// Function to delete a blog post
export async function deletePost(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, { // Making a DELETE request to the JSON Server
            method: 'DELETE' // Specifying the method as DELETE
        });
        return await response.json(); // Parsing the response to JSON
    } catch (error) {
        console.error('Error deleting post:', error); // Log any errors that occur
    }
}

// Note: Ensure JSON Server is running on localhost:3000
Explanation in Hinglish
blogService.js file mein humne CRUD operations ke liye alag-alag functions banaye hain jo JSON Server ke sath interact karte hain.

getPosts(): Ye function saare blog posts ko get karne ke liye hai. Yahan hum fetch() ka use karke JSON Server se data mang rahe hain. Agar response successful nahi hai, to hum error throw karte hain.

addPost(post): Is function ka use new blog post add karne ke liye hota hai. Yahan hum fetch() function mein POST method specify karte hain aur blog post ko JSON format mein bhejte hain.

updatePost(id, updatedPost): Kisi existing post ko update karne ke liye ye function use hota hai. Yahan hum PUT method ka use karte hain. Hum jo updated data bhej rahe hain, use bhi JSON mein convert karte hain.

deletePost(id): Kisi post ko delete karne ke liye ye function hai. Isme hum DELETE method ka use karte hain.

Ye sabhi functions async hain, matlab ye asynchronous operations perform karte hain. Har function mein try-catch block ka use kiya gaya hai taaki kisi bhi tarah ke errors ko handle kiya ja sake.
 */