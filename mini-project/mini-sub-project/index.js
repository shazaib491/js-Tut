let displayTable = document.querySelector("#displayTable");
console.log(displayTable)
let blogTable = [
  {
    id: 1,
    title: "First Post",
    body: "First Post Description",
  },
  {
    id: 2,
    title: "Second Post",
    body: "Second Post Description",
  },
];


function show(){
    blogTable.forEach((slamankhan)=>{
        displayTable.innerText+=`
            <tr>
                <td>${slamankhan.title}</td>
                <td>${slamankhan.body}</td>
            </tr>
        `
        })
}

show();



console.log([1,2,3,45].reduce(bigShow,4))


//callback
function bigShow(totalValue,currentValue){
return totalValue + currentValue
}
