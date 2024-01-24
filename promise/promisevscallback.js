function fetchDataFromSource1(callback) {
    // Simulating a data fetch
    setTimeout(() => {
        callback(null, 'Data from source 1');
    }, 1000);
}

function fetchDataFromSource2(callback) {
    // Simulating a data fetch
    setTimeout(() => {
        callback(null, 'Data from source 2');
    }, 1000);
}

// Nesting callbacks to fetch data from two sources
fetchDataFromSource1((error1, data1) => {
    if (error1) {
        console.error(error1);
    } else {
        console.log(data1);
        fetchDataFromSource2((error2, data2) => {
            if (error2) {
                console.error(error2);
            } else {
                console.log(data2);
            }
        });
    }
});


function fetchDataFromSource1() {
    return new Promise((resolve, reject) => {
        // Simulating a data fetch
        setTimeout(() => {
            resolve('Data from source 1');
        }, 1000);
    });
}

function fetchDataFromSource2() {
    return new Promise((resolve, reject) => {
        // Simulating a data fetch
        setTimeout(() => {
            resolve('Data from source 2');
        }, 1000);
    });
}

// Using Promises to fetch data from two sources
fetchDataFromSource1()
    .then(data1 => {
        console.log(data1);
        return fetchDataFromSource2();
    })
    .then(data2 => {
        console.log(data2);
    })
    .catch(error => {
        console.error(error);
    });