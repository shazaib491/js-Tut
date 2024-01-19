// Nested if Statement: This structure allows you to use an if or if...else statement inside another if or if...else statement.

if (isLoggedIn) {
    if (userRole === 'admin') {
        console.log("Access to all systems.");
    } 
    
    if(userRole === 'user'){
        console.log("Limited Access")
    }
}

if (temperature > 20) {
    if (isRaining) {
        console.log("Take a light raincoat.");
    } else {
        console.log("Wear light clothes.");
    }
}

if (age > 18) {
    if (hasLicense) {
        console.log("You can drive.");
    } else {
        console.log("You need a license to drive.");
    }
}

if (day === 'Weekday') {
    if (time < 18) {
        console.log("Working hours.");
    } else {
        console.log("Off hours.");
    }
}

if (score > 80) {
    if (score > 90) {
        console.log("Grade A");
    } else {
        console.log("Grade B");
    }
}
