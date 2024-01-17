// else if Ladder: This structure is a series of if statements, where each if statement has an else if clause. It's used to differentiate between multiple conditions.

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

if (temperature > 35) {
    console.log("Extremely hot");
} else if (temperature > 30) {
    console.log("Very hot");
} else if (temperature > 25) {
    console.log("Moderately hot");
} else if (temperature > 20) {
    console.log("Warm");
} else {
    console.log("Cool");
}

if (day === "Monday") {
    console.log("Start of the work week.");
} else if (day === "Wednesday") {
    console.log("Midweek.");
} else if (day === "Friday") {
    console.log("End of the work week.");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend!");
} else {
    console.log("Regular workday.");
}

if (animal === 'Dog') {
    console.log("Pet: Dog");
} else if (animal === 'Cat') {
    console.log("Pet: Cat");
} else if (animal === 'Bird') {
    console.log("Pet: Bird");
} else {
    console.log("Unknown pet");
}

if (score < 50) {
    console.log("Fail");
} else if (score < 65) {
    console.log("Pass");
} else if (score < 75) {
    console.log("Good");
} else if (score < 90) {
    console.log("Very Good");
} else {
    console.log("Excellent");
}
