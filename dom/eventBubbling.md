`addEventListener` JavaScript ka ek method hai jo kisi element pe specific event ko listen karta hai, aur jab woh event trigger hota hai, tab ek function execute hota hai. Is method ko use karke hum multiple events ko ek hi element pe attach kar sakte hain bina overwriting ke.

JavaScript mein events ko handle karne ke do main phases hote hain:
1. **Event Bubbling** (Default behavior)
2. **Event Capturing**

In dono phases ko hum samajhne se pehle, `addEventListener` ko kaise use karte hain, wo dekhte hain.

### `addEventListener` Syntax:
```javascript
element.addEventListener(event, function, useCapture);
```

- **`element`**: Wo HTML element jispe event listener attach karna hai.
- **`event`**: Event ka naam, jaise `click`, `keydown`, `mouseover`, etc.
- **`function`**: Wo function jo event trigger hone par execute hoga.
- **`useCapture`**: Optional boolean value hai. Agar `true` set karte hain to event capturing phase mein function chalega. Agar `false` ya blank chhoda to event bubbling phase mein function chalega (by default `false` hota hai).

---

## Event Bubbling vs Event Capturing

### Event Bubbling:
Event bubbling mein event sabse pehle innermost element (jisme event trigger hua) se start hota hai aur phir parent elements tak propagate hota hai. Matlab, event `child` se start hota hai aur `parent` tak bubble karta hai.

### Event Capturing:
Event capturing ko trickling bhi kehte hain. Isme event sabse pehle outermost element se start hota hai aur innermost element tak jata hai, yaani pehle `parent` se start hoke `child` pe jaake event trigger hota hai.

---

### Example to Understand Event Bubbling and Capturing:

#### HTML Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubbling and Capturing</title>
    <style>
        #parent {
            padding: 20px;
            background-color: lightblue;
        }
        #child {
            padding: 20px;
            background-color: lightcoral;
        }
    </style>
</head>
<body>

    <div id="parent">
        Parent Div
        <div id="child">
            Child Div
        </div>
    </div>

    <script src="app.js"></script>

</body>
</html>
```

#### JavaScript (app.js):

```javascript
// Parent element
const parentDiv = document.getElementById('parent');

// Child element
const childDiv = document.getElementById('child');

// Event Bubbling Example (Default behavior)
parentDiv.addEventListener('click', function() {
    console.log('Parent clicked');
}, false); // false means event bubbling

childDiv.addEventListener('click', function() {
    console.log('Child clicked');
}, false); // false means event bubbling

// Event Capturing Example
parentDiv.addEventListener('click', function() {
    console.log('Parent clicked (Capturing)');
}, true); // true means event capturing

childDiv.addEventListener('click', function() {
    console.log('Child clicked (Capturing)');
}, true); // true means event capturing
```

### Explanation:

- **Event Bubbling** (when `false` is passed):
    - Jab aap `Child Div` pe click karte ho, pehle child ka event trigger hota hai (i.e., "Child clicked"), phir parent ka event trigger hota hai (i.e., "Parent clicked").
    - Is behavior ko `Event Bubbling` kehte hain kyunki event child se start hokar parent tak propagate hota hai.

- **Event Capturing** (when `true` is passed):
    - Jab aap `Child Div` pe click karte ho, sabse pehle parent ka capturing event trigger hota hai (i.e., "Parent clicked (Capturing)"), phir child ka capturing event trigger hota hai (i.e., "Child clicked (Capturing)").
    - Is behavior ko `Event Capturing` kehte hain kyunki event parent se start hoke child tak propagate hota hai.

---

### Full Event Flow (Mix of Bubbling and Capturing):
1. Pehle **capturing phase** execute hota hai (parent se child tak).
2. Phir actual element pe event trigger hota hai.
3. Uske baad **bubbling phase** start hota hai (child se parent tak).

### Real-world Example:

Imagine karo ek form hai jisme submit button pe click karte hi form submit ho jata hai, lekin button ka parent ek modal box hai. Agar event bubbling ko theek se handle nahi kiya gaya to modal ke close hone ke baad bhi form submit ho sakta hai.

Event bubbling ke control ke liye hum `event.stopPropagation()` use karte hain, jo event ko uske parent elements tak bubble hone se rokta hai.

```javascript
childDiv.addEventListener('click', function(event) {
    console.log('Child clicked');
    event.stopPropagation(); // Parent tak bubble nahi hoga
}, false);
```

---

### Conclusion:
- `addEventListener` humein events ko handle karne ka ek flexible aur controlable tariqa deta hai.
- **Event Bubbling** mein event inner element se outer elements tak propagate karta hai.
- **Event Capturing** mein event outer elements se inner element tak propagate karta hai.
- Aap `useCapture` ko `true` ya `false` karke decide kar sakte ho ki event capturing ya bubbling ko use karna hai.

I hope ye explanation aur example clear ho gaye honge!
