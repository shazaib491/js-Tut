
# JSON Server Setup Guide

This guide provides instructions on how to install and run JSON Server, a fake REST API, on your local machine using a sample `db.json` file.

## Prerequisites

- Node.js installed on your machine. If you don't have Node.js installed, download and install it from [Node.js official website](https://nodejs.org/).

## Installation

1. **Install JSON Server**

   Open your terminal or command prompt and run the following command:

   ```bash
   npm install -g json-server
   ```

   This will install JSON Server globally on your machine.

2. **Prepare the `db.json` File**

   Create a file named `db.json` in your desired directory and paste the following JSON structure into it:

   ```json
   {
     "blogs": [
       {
         "id": 1,
         "title": "First Blog Post",
         "author": "Jane Doe",
         "body": "This is the content of the first blog post.",
         "date": "2024-01-27"
       },
       {
         "id": 2,
         "title": "Second Blog Post",
         "author": "John Doe",
         "body": "This is the content of the second blog post.",
         "date": "2024-01-28"
       }
       // ... more blog posts ...
     ]
   }
   ```

   Feel free to modify the content as per your requirements.

## Running JSON Server

1. **Start the Server**

   Navigate to the directory where your `db.json` file is located. Then run the following command in your terminal:

   ```bash
   json-server --watch db.json
   ```

   This command will start JSON Server and watch for any changes made to the `db.json` file.

2. **Accessing the API**

   Once the server is running, you can access your fake REST API at:

   ```
   http://localhost:3000
   ```

   To access the blogs, use the endpoint:

   ```
   http://localhost:3000/blogs
   ```

## Usage

- You can perform standard HTTP requests (GET, POST, PUT, DELETE) to interact with your API.
- For detailed usage and advanced configurations, visit the JSON Server GitHub repository at [https://github.com/typicode/json-server](https://github.com/typicode/json-server).

Happy coding!

## Future Suggestions 

As you grow in your journey as a developer, here are a few suggestions to consider:

- **Explore Further:** Dive deeper into backend development. Explore frameworks like Express.js for Node.js, which can offer more flexibility and power for building APIs.

- **Understand Database Management:** Learn about different types of databases like SQL (e.g., PostgreSQL, MySQL) and NoSQL (e.g., MongoDB). Understanding how to interact with databases is a key skill for any backend developer.

- **Version Control:** Familiarize yourself with version control systems, especially Git. It's an essential tool for collaboration and maintaining your codebase.

- **Read and Contribute to Open Source:** Engage with the open-source community. Reading other people's code and contributing to open source projects can significantly enhance your coding skills.

- **Stay Updated and Keep Learning:** The tech field is always evolving. Stay updated with the latest trends and technologies. Online platforms like GitHub, Stack Overflow, and Medium are great for staying informed.

- **Build Projects:** Nothing beats the learning that comes from building something from scratch. Keep experimenting with new ideas and building your projects.

Remember, the key to becoming a proficient developer is consistent practice and a willingness to learn. Keep challenging yourself with new problems and strive to find innovative solutions. Happy coding!

