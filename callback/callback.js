// function askQuestion(question, callback) {//1000
//   //callback
//   console.log(question);
//   callback("facebook is social network platform");
// }

// function studentResponse(ans) {
//   console.log(ans);
// }

// askQuestion("what is facebook", studentResponse);
// //student response ===1000


function performAsyncTask(successCallback, failureCallback) {
    setTimeout(() => {
      const didSucceed = false // 50% chance of success
      if (didSucceed) {
        successCallback("Task completed successfully!");
      } else {
        failureCallback("Task failed.");
      }
    }, 2000);//optional he bhai
  }
  
  function onSuccess(message) {
    console.log("Success:", message);
  }
  
  function onFailure(error) {
    console.error("Failure:", error);
  }
  
  performAsyncTask(onSuccess, onFailure);
  
  
  
  [1,2,3,4,5].forEach(printElement)
  
  function printElement(element){
      console.log(element);
  }