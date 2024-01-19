var fruits = ["Apple",12, "Banana", "Cherry", "Date", "Elderberry"];
fruits[2]="admin";
// console.table(fruits.length);
// fruits.ProtoType
// 0 5 
// console.table(fruits)
// for (var i = 0; i<=fruits.length-1; i++){
//     console.log(fruits[i]);
// }

// for(var element of fruits){
//     console.log(element);
// }

fruits.forEach(getFruits)

function getFruits(element){
    console.log(element);
}

let newArray=[1,2,3,4,5];

function changeArray(element){
   return element *2; 
}

let arrays=newArray.map(changeArray)

console.log(arrays);

// find element
let no=5;

let element=newArray.findIndex((element)=>{
    if(element==no){
        return element;
    }
})


let filteredArray=newArray.filter((element)=>{
    if(element!==3){
        return element;
    }
})

console.log(filteredArray);