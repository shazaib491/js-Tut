function prepareStarter(callback) {
    console.log("Preparing the starter...");
    setTimeout(() => {
        console.log("Starter is ready!");
        callback();
    }, 5000);
}

function prepareMainCourse(callback) {
    console.log("Preparing the main course...");
    setTimeout(() => {
        console.log("Main course is ready!");
        callback();
    }, 5000);
}

function prepareDessert(callback) {
    console.log("Preparing the dessert...");
    setTimeout(() => {
        console.log("Dessert is ready!");
        callback();
    }, 5000);
}

prepareStarter(() => {
    prepareMainCourse(() => {
        prepareDessert(() => {
            console.log("All courses are ready!");
        });
    });
});

// prepareStarter(()=>{
//     prepareMainCourse(()=>{
//         prepareDessert(()=>{
//             console.log("All courses are ready!");

//         })
//     })
// })



// [1,2,3,4,5].forEach(()=>{})

let isCheck=false;
function getResponseFromServer(resolve,reject){
    if(isCheck){
        resolve();
    }else{
        reject();
    }
}

function success(){
console.log("Success Message")
}


function error(){
console.log("error Message")

}

getResponseFromServer(success,error)