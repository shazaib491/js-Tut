// let username = "javascript";
// let temp = "";
// let count = 0;
// for (let i = 0; i <= username.length; i++) {
//   if (username[i] === "a") { // t==a=
//     count++;
//   }
// }

// console.log("n of time string appears in " + username + "=" + count);

// let arr=[];

// let username="hello from javascript end ";
// let str="";
// for(let i=0; i<=username.length-1; i++){
//     str+=name[i];
//     if(name[i]==" "){
//         arr.push(str)
//         str="";
//     }
// }

// console.log(arr);

// let str = "javascript";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (
//     str[i] == "a" ||
//     str[i] == "e" ||
//     str[i] == "i" ||
//     str[i] == "o" ||
//     str[i] == "u"
//   ) {
//     count++;
//   }
// }

// console.log(count);

// let str = "listentsddsa";
// let tempStr = "silent";

// let flen = str.length;
// let slen = tempStr.length;
// let count = 0;
// for (let i = 0; i <= flen - 1; i++) {
//   count = 0;
//   for (let j = 0; j <= slen - 1; j++) {
//     if (str[i] == tempStr[j]) {
//       count++;
//     }
//   }
//   if (count == 0) {
//     break;
//   }
// }

// if (count > 0) {
//   console.log("string is  anangram");
// }

//
// let str = "I love javascript";
// let arr = [];
// let words = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     arr.push(words);
//     words = "";
//   } else {
//     words += str[i];
//   }
// }

// if (words) {
//   arr.push(words);
// }

// console.log(arr);

// function findOccurrence(input1, input2, input3) {
//   let count = 0;

//   if (input1.length != input2) {
//     return -1;
//   }
//   for (let i = 0; i < input2; i++) {
//     if (input1[i] == input3) {
//       count++;
//     }
//   }
//   return count;
// }
// let input1=prompt("Enter your string");
// let input2=+prompt("Enter string length")
// let input3=prompt("Enter the character to find");
// console.log(findOccurrence(input1, input2, input3));
// let lengthForDom = document.getElementById("length");
// let str = "";
// function takeInput(event) {
//   let value = event.target.value;
//   str = value;
// }

// function len() {
//   let index = 0;
//   while (str[index] !== undefined) {
//     index++;
//   }
//   lengthForDom.textContent = index;
//   str = "";
// }

// let str = "India is poor country";

// function split(str) {
//   let arr = [];
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       arr.push(newStr);
//       newStr = "";
//     } else {
//       newStr += str[i];
//     }
//   }
//   arr.push(newStr);
//   return arr;
// }

// let splitString = split(str);

// function SmallestString(array) {
//   let smallestStringLen = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length < smallestStringLen.length) {
//         smallestStringLen = array[i];
//     }
//   }
//   return smallestStringLen;
// }

// function largestString(array) {
//     let largestString = array[0];
//     for (let i = 0; i < array.length; i++) {
//       if (array[i].length > largestString.length) {
//         largestString = array[i];
//       }
//     }
//     return largestString;
//   }

// console.log(largestString(splitString));
// console.log(SmallestString(splitString));

// let username="naman";
// let middle=Math.floor(username.length/2);
// console.log(username[middle]);

// function split(str) {
//   let arr = [];
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       arr.push(newStr);
//       newStr = "";
//     } else {
//       newStr += str[i];
//     }
//   }
//   arr.push(newStr);
//   return arr;
// }

// let str = "Hello world";

// let spitedString = split(str);

// let [first, second] = [spitedString[spitedString.length - 1], spitedString[0]];
// console.log(first, second);

// let temp = spitedString[0];
// spitedString[0] = spitedString[1];
// spitedString[1] = temp;

// console.log(spitedString);

// let arr=[1,2,3,4,5];

// let [first,second,third,_,fifth]=arr;
// console.log(first,second,third,fifth);


// let str="       hello world         ".trimEnd();

// console.log(str);
// console.log(str.slice(1,3))

// let text="5";
// console.log(text.padEnd(4,"$"));

let newText="str world";

console.log(newText.split(""))

