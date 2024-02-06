var fruits = ["Apple", 12, "Banana", "Cherry", "Date", "Elderberry"];
fruits[2] = "admin";
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

// fruits.forEach(getFruits)

// function getFruits(element){
//     console.log(element);
// }

// let newArray=[1,2,3,4,5];

// function changeArray(element){
//    return element *2;
// }

// let arrays=newArray.map(changeArray)

// console.log(arrays);

// // find element
// let no=5;

// let element=newArray.findIndex((element)=>{
//     if(element==no){
//         return element;
//     }
// })

// let filteredArray=newArray.filter((element)=>{
//     if(element!==3){
//         return element;
//     }
// })

// console.log(filteredArray);

// let firstCopy = [1, 2, 3, 4, 5,[1,2,3,4]];

// let deepCopy = structuredClone(firstCopy)
// deepCopy[5][0]=500;
// console.log(firstCopy);
// console.log(deepCopy);

let arr = [1, 2, 3, 4, 5];

// let one=arr[0];
// let two=arr[1]
// let three=arr[2];
// let four=arr[3];
// let five=arr[4];

// let [one,...three]=arr;
// console.log(one,three)


// let [first,second,...rest]=arr;



// console.log(first,second,rest)


// let open=[1,2,3,4,5,6,7,8,9];

// let [first,,,second]=open;

// console.log(first,second);

// let nestedArray=[1,[2,3]];
// const [a,[b,c]]=nestedArray;
// console.log(a,b,c)


// let a=1; b=2;
// [one,two]=[b,a];
// console.log(one,two)


function sum(...numbers){
    // console.log(numbers);
    // console.log(numbers.reduce((acc,current)=>acc+current))
    let s=0; 
    for(let i=0; i<numbers.length; i++){
        s=s+numbers[i];
    }
    console.log(s)

}

sum(10,20,30,40,50,40,50,60)
