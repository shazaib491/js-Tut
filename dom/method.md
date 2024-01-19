
# Basic DOM Methods and Examples

Here are some basic DOM (Document Object Model) methods used in JavaScript, along with simple examples for each. These methods are fundamental for interacting with web pages.

## 1. `document.getElementById()`
Gets an element by its unique ID.
```javascript
// HTML: <div id="myDiv">Content</div>
var myDiv = document.getElementById("myDiv");
```

## 2. `document.getElementsByClassName()`
Gets all elements that have a specified class name.
```javascript
// HTML: <div class="myClass"></div><div class="myClass"></div>
var elements = document.getElementsByClassName("myClass");
```

## 3. `document.getElementsByTagName()`
Gets all elements with a specified tag name.
```javascript
// HTML: <p>Paragraph 1</p><p>Paragraph 2</p>
var paragraphs = document.getElementsByTagName("p");
```

## 4. `element.innerHTML`
Gets or sets the HTML content of an element.
```javascript
// HTML: <div id="myDiv"></div>
var myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "New Content";
```

## 5. `element.textContent`
Gets or sets the text content of an element.
```javascript
// HTML: <div id="myDiv">Old Content</div>
var myDiv = document.getElementById("myDiv");
console.log(myDiv.textContent); // Outputs: Old Content
```

## 6. `element.setAttribute()`
Sets a new attribute or changes the value of an existing attribute on an element.
```javascript
// HTML: <div id="myDiv"></div>
var myDiv = document.getElementById("myDiv");
myDiv.setAttribute("class", "newClass");
```

## 7. `element.getAttribute()`
Gets the value of an attribute on the specified element.
```javascript
// HTML: <div id="myDiv" class="example"></div>
var myDiv = document.getElementById("myDiv");
var className = myDiv.getAttribute("class"); // Outputs: example
```

## 8. `element.style.property`
Changes the style of an element.
```javascript
// HTML: <div id="myDiv"></div>
var myDiv = document.getElementById("myDiv");
myDiv.style.color = "blue";
```

## 9. `document.createElement()`
Creates a new element with the specified tag name.
```javascript
var newDiv = document.createElement("div");
```

## 10. `parentNode.appendChild()`
Adds a new child node to an element.
```javascript
// Assuming newDiv is a new element created
document.body.appendChild(newDiv);
```

These methods are essential for basic interactions with the DOM in web development.
