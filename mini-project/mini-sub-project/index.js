let displayTable = document.querySelector("#displayTable");
let titleInput=document.querySelector("#title")
let bodyInput=document.querySelector("#body")


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
  displayTable.innerHTML="";
    blogTable.forEach((element)=>{
        displayTable.innerHTML+=`
            <tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.body}</td>
            </tr>
        `
        })
}


function onSave(event){
  event.preventDefault();
  let blogsInput={
    id:blogTable.length+1,
    title:titleInput.value,
    body:bodyInput.value
  }
  console.log(blogsInput);
  blogTable.push(blogsInput);
  console.log(blogTable)
  show();
  titleInput.value="";
  bodyInput.value="";
}

show();






