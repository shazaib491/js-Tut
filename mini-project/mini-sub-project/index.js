let displayTable = document.querySelector("#displayTable");//2
let titleInput=document.querySelector("#title")
let bodyInput=document.querySelector("#body")

let currentEditingId = null;//5


// 1
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


function show(){//3
  displayTable.innerHTML=""; //4 
    blogTable.forEach((element)=>{//5
        displayTable.innerHTML+=`
            <tr> 
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.body}</td>
                <td>
                <button  class="btn btn-sm btn-primary"  onclick="editBlog(${element.id})" >Edit</button>
                <button  class="btn btn-sm btn-danger"  onclick="deleteBlog(${element.id})" >Delete</button>
                </td>
            </tr>
        `
        })

        //delete 1 button element add kiya tha for line 33
        //delete 2 button element click krne pr current id pass kri he line 33
        //edit 1 button element add kiya tha for line 34
        //edit 2 button element click krne pr current id pass kri he line 34

}

show(); //6


function onSave(event){ // insert 4
  //2 event receive us current event ki information rkhta he 
  event.preventDefault();// data loss hone se bachaya jae

  if(currentEditingId){// update 7 
    //update
    let elementIndex=blogTable.findIndex((blogIndex)=>blogIndex.id==currentEditingId);// update 8 
    blogTable[elementIndex].title=titleInput.value//update 9
    blogTable[elementIndex].body=bodyInput.value//update 9
    currentEditingId=null;//update 10
  }else{
    //save 
    let blogsInput={//6
      id:blogTable.length+1,
      title:titleInput.value,
      body:bodyInput.value
    }
    
    blogTable.push(blogsInput);//7
  }

 
  show();
  titleInput.value="";
  bodyInput.value="";
  event.target.reset();
}



//method for editing the blog
function editBlog(id){
  let singleElement=blogTable.find((blog)=>blog.id==id);//3
  titleInput.value=singleElement.title;//4
  bodyInput.value=singleElement.body;//4
  currentEditingId=id;//5 //6
}

// method for deleting a blog
function deleteBlog(id) {
  blogTable=blogTable.filter((blog)=>blog.id!==id);// delete 4 
  show() // 
}



