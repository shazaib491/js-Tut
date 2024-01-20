
# Blog Application Operations

## Overview
This JavaScript application manages a list of blog posts, allowing users to add, edit, delete, and view posts. The user interface is rendered in a table format where each blog post is a row in the table.

## Table Structure
The table is dynamically generated and displays the blog posts. Each row represents a single blog post with the following columns:

- **Title**: Displays the title of the blog post.
- **Body**: Shows the body or content of the blog post.
- **Actions**: Contains buttons for editing or deleting the respective blog post.

```html
<table>
  <tr>
    <th>Title</th>
    <th>Body</th>
    <th>Actions</th>
  </tr>
  <!-- Blog posts are inserted here dynamically -->
</table>
```

## Operations

### 1. Show Blog Posts (`show` function)
- **Description**: Renders the list of blog posts in the table format.
- **Process**: Loops through each blog post in the `blog` array and creates a table row (`<tr>`) with the post's title, body, and action buttons.
- **Action Buttons**:
  - **Edit**: Sets up the form to edit the selected blog post.
  - **Delete**: Removes the selected blog post from the list.

### 2. Add or Update Blog Post (`onSave` function)
- **Description**: Adds a new blog post or updates an existing one.
- **Process**:
  - If editing (determined by `currentEditingId`), finds the post in the `blog` array and updates its title and body.
  - If adding a new post, creates a new post object and appends it to the `blog` array.
- **ID Assignment**: New posts are assigned a unique ID, incrementally based on the length of the `blog` array.

### 3. Edit Blog Post (`edit` function)
- **Description**: Prepares the form for editing an existing blog post.
- **Process**: Fills the form inputs with the selected post's title and body, and sets `currentEditingId` to indicate which post is being edited.

### 4. Delete Blog Post (`deleteTask` function)
- **Description**: Removes a blog post from the list.
- **Process**: Filters out the blog post with the given ID from the `blog` array.

### 5. Reset Form (`resetForm` function)
- **Description**: Clears the form inputs and resets the editing state.
- **Process**: Empties the title and body input fields and sets `currentEditingId` to `null`, indicating no post is currently being edited.

## Initial Rendering
- The `show` function is called initially to render any existing blog posts when the page loads.
