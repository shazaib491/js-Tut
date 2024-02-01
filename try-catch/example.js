// // try {
// //     let obj = undefined;
// //     console.log(obj.property); // This line has a mistake
// // } catch (e) {
// //     console.error("Oops, a mistake:", e.message);
// // }

// // // console.log("error")

// // // let obj = undefined;
// // // console.log(obj.property); // This line has a mistake
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")
// // console.log("Hello WOrld")

// // try {
// //     let data = '{"name": "John", "age": 30'; // This JSON text is not complete
// //     let user = JSON.parse(data);
// // } catch (e) {
// //     console.error("Problem with JSON:", e.message);
// // }

// // console.log("dsnkjlsdfnljn")

// // fetch("")
// //   .then((serverResponse) => {
// //     serverResponse
// //       .json()
// //       .then((data) => {
// //         console.log(data);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   })
// //   .catch((errorResponse) => {
// //     console.log(errorResponse);
// //   });
// let url="https://jsonplaceholder.typicode.com/todos";
// async function fetchData() {
//   try {
//     const serverResponse = await fetch(url);
//     const jsonToObjectResponse=await serverResponse.json();
//     console.log(jsonToObjectResponse)
//   } catch (error) {
//     console.log(error)
//   }
// }
// fetchData()

// let data={

// }

// fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data), // data can be any JavaScript object
//   })
//   .then(response =>{ return response.json()})
//   .then(data => console.log(data));

//   fetch(url+"/1", {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data), // data can be any JavaScript object
//   })
//   .then(response =>{ return response.json()})
//   .then(data => console.log(data));

// //   {
// //     id:1,
// //     title:"eating",
// //     completed:false
// //   }

// fetch(url+"/1", {
//     method: 'DELETE',
//   })
//   .then(response =>{ return response.json()})
//   .then(data => console.log(data));

let url = "https://jsonplaceholder.typicode.com/todos";
// axios
//   .get(url)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch((error) => console.log(error));

async function getData() {
  try {
    const data = await axios.get(url);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

async function postData() {
  try {
    const data = await axios.post(url, {
      id: 1,
      title: "eating",
      complete: false,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

postData()



async function putData() {
    try {
      const data = await axios.put(url+"/1", {
        id: 1,
        title: "eating",
        complete: false,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  putData()

async function deleteData() {
    try {
      const data = await axios.delete(url+"/1");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

deleteData()
