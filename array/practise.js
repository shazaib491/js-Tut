// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];


// let secondFruits=["admin","second"];

// // let newArray=fruits.concat(secondFruits)

// // console.log(newArray)



// let printElement=

// fruits.forEach((element,index,instance)=>{
//     console.log(element,instance);
// });

// // fruits.push("banana")
// // console.log(fruits)


// // fruits.pop();

// // let value=fruits.find(findElement)
// // let indexValue=fruits.findIndex(findElement)
// // console.log(indexValue);
// // function findElement(element){
// //     if(element=="Banana"){
// //         return element;
// //     }
// // }

// let numberElement=[1,2,3,4,5];


// // let transformValue=numberElement.map(element=>element * 2)
// // console.log(transformValue)

// // const numbers = [1, 2, 3, 4];
// //  const even = numbers.filter(n => n!==2);
// // console.log(even);
// let s=0;
// for(let i=0; i<numberElement.length; i++){
//     s=s+numberElement[i];
// }

// // console.log(s);

// const numbers = [1000,1,40000, 2, 3];
// let elem=numbers[2]
// let [zeroIndex,secondIndex,thirdIndex]=numbers;

// // let firstElement=numbers[1];
// // console.log(fourth);
// // const sum = numbers.reduce((total, num) => total + num, 0);
// // console.log(sum);

// // console.log(numbers.sort((a, b) => a - b).reverse());

// // let number_2=structuredClone(numbers)

// // number_2[5][1]=10000;

// // console.log(numbers);
// // console.log(number_2)


// // let elem=[
// //     ["name","admin"],
// //     []
// // ]

let user=[
    {
        name:"admin",
        email:"admin@example.com",
        password:"admin@123"
    },
    {
        name:"anas",
        email:"asan@example.com",
        password:"admin@123"
    },
    {
        name:"user2",
        email:"user2@example.com",
        password:"admin@123"
    },
    {
        name:"user2",
        email:"user2@example.com",
        password:"admin@123",
        info:[]  
    }
]

let newArrayElement=structuredClone(user)

// user.forEach((element)=>
// {
//     if(element.name==="admin"){
//         console.log(element);
//     }
// })

// console.log(user);
            //  [FirstWeekOfYear,third]   
// 


let numArray=[1,2,3,4,5,6,7,8,9,10,11];

let elem=numArray;

console.log(elem)




// kdjlksajdsajdiasjdaodjsa.dasdsadsadasdas

let obj={
    name: "admin",
    email:"admin@example.com"
}


// let name=obj.name;

let  {name,email}=obj;

