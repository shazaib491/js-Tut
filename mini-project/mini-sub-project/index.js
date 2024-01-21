let displayTable = document.querySelector("#displayTable");

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
    blogTable.forEach((post)=>{
        displayTable.innerHTML+=`
            <tr>
                <td>${post.title}</td>
                <td>${post.body}</td>
            </tr>
        `
        })
}

show();

