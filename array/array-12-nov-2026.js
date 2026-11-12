

let a=10;
let b=20;
let c=30;

// let arr = [10,20,30,40,50];
// console.log(arr[2]);
// console.log(arr.length);

// wap to print all element in an array
// for(let i=0;i<=arr.length-1;i++){
//     console.log(i,arr[i],arr.length-1);
// }

// for(let i of arr){
//     console.log(i)
// }

// console.table(arr);

// wap to print the sum of the numbers
// let s=0;
// for(let element of arr){
//     s=s+element;
// }

// console.log(s);

// wap to find the element in an array


// let number=30;
// for(let element of arr){
//     if(element==number){
//         console.log(element);
//         break;
//     }
// }

// wap to find largest number in array
// let smallest = arr[0];
// for(let num of arr){
//     if(num < smallest){
//         smallest=num;
//     }
// }

// console.log(smallest)


// let printAllElement = (arr)=>{
//     for(let num of arr){
//         console.log(num);
//     }
// }

// let sumOfArray = (arr) => {
//   let s = 0;
//   for (let element of arr) {
//     s = s + element;
//   }
//   return s;
// };

// let linearSearch = (arr, findElement) => {
//   for (let element of arr) {
//     if (element == findElement) {
//       console.log(element);
//       break;
//     }
//   }
// };


// let smallestElementInArray=(arr)=>{
//    let smallest = arr[0];
// for(let num of arr){
//     if(num < smallest){
//         smallest=num;
//     }
// } 

// return smallest;
// }

// console.log(sumOfArray(arr));
// linearSearch(arr,40)
// console.log(smallestElementInArray(arr));
// printAllElement(arr);

// printAllElement(arr);


let arr = [10,20,30,40,50];//5

arr.push(30);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(100);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.at(1))
console.log(arr[1])

console.log(arr.indexOf(30))

let element = arr.find(findElement);
console.log(element);

let elementIndex = arr.findIndex(findElement);
console.log(elementIndex);


function findElement(element){
    if(element==30){
        return true;
    }
}

arr.forEach(printElement);

function printElement(element){
    console.log(element);
}





// function pushElement(arr,element){
//     //5
//     //index 4
//     arr[arr.length]=element;
// }

// function popElement(arr){
//     arr.length = arr.length-1;
// }

// pushElement(arr,60);
// popElement(arr);
// console.log(arr);

