
# Web Storage and Cookies: A Simple Guide

## Local Storage

### Explanation
Local Storage is part of the Web Storage API, allowing data storage in the browser with no expiration date. The stored data is saved across browser sessions. Data in Local Storage is specific to the protocol of the page.

### CRUD Operations

- **Create/Update**: 
  ```javascript
  localStorage.setItem('key', 'value');
  ```

- **Read**: 
  ```javascript
  let value = localStorage.getItem('key');
  ```

- **Delete**: 
  ```javascript
  localStorage.removeItem('key');
  ```

- **Clear All**: 
  ```javascript
  localStorage.clear();
  ```

## Session Storage

### Explanation
Session Storage is similar to Local Storage but is limited to a single session. The data is cleared when the page session ends (i.e., when the browser tab is closed).

### CRUD Operations

- **Create/Update**: 
  ```javascript
  sessionStorage.setItem('key', 'value');
  ```

- **Read**: 
  ```javascript
  let value = sessionStorage.getItem('key');
  ```

- **Delete**: 
  ```javascript
  sessionStorage.removeItem('key');
  ```

- **Clear All**: 
  ```javascript
  sessionStorage.clear();
  ```

## Cookies

### Explanation
Cookies are small pieces of data stored on the client's computer by the web browser while browsing a website. Cookies are mainly used for session management, personalization, and tracking.

### CRUD Operations

- **Create/Update**: 
  ```javascript
  document.cookie = "key=value; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
  ```

- **Read**: 
  ```javascript
  let cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('key='))
    ?.split('=')[1];
  ```

- **Delete**: 
  ```javascript
  document.cookie = "key=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  ```
