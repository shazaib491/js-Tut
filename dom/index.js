let elementId=document.getElementById("demo");

elementId.innerHTML+="<p>Demo</p>";

elementId.style.color="red";



let classId=document.getElementsByClassName("demo_1");

let allElement=document.getElementsByTagName("a");

console.log(classId);

for(classes of classId){
    console.log(classes.textContent)
    if(classes.textContent=="New World 2"){
        // classes.style.color="green";
        classes.setAttribute("style", "background-color:red;");
        

    }
}




// console.log()
// allElement[0].href="www.google.com";



function onSubmit(){
    console.log("onSubmit");
}

let name="admin"


let paragraph="adssaddasdasd"+ name +"nfalksnfas"
let paragraphs=`adssaddasdasd ${name} nfalksnfas`

console.log(paragraph, paragraphs)

