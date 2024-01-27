try {
    let obj = undefined;
    console.log(obj.property); // This line has a mistake
} catch (e) {
    console.error("Oops, a mistake:", e.message);
}

console.log("error")