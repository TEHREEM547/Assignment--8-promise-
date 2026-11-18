// question no 1
let balance = 10000;
let withdrawAmount = 7000;

let withdrawal = new Promise((resolve, reject) => {

    if (balance >= withdrawAmount) {
        balance = balance - withdrawAmount;
        resolve("Withdrawal Successful! Remaining Balance: Rs. " + balance);
    } 
    else {
        reject("Insufficient Balance!");
    }

});

withdrawal
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    // question no 2
    let marks = 75;

let result = new Promise((resolve, reject) => {

    if (marks < 0 || marks > 100) {
        reject("Invalid Marks!");
    }
    else if (marks >= 50) {
        resolve("Congratulations! You Passed.");
    }
    else {
        reject("Sorry! You Failed.");
    }

});

result
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

    // question no 3
    let delivery = new Promise((resolve, reject) => {

    setTimeout(() => {

        let isDelivered = true;

        if (isDelivered) {
            resolve("Product Delivered Successfully");
        }
        else {
            reject("Delivery Failed");
        }

    }, 3000);

});

delivery
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

    // question no 4
    let number = new Promise((resolve, reject) => {
    resolve(10);
});

number
    .then((value) => {
        console.log("Starting Number:", value);
        return value + 20;
    })

    .then((value) => {
        console.log("After Adding 20:", value);
        return value * 2;
    })

    .then((value) => {
        console.log("After Multiplying by 2:", value);
        return value - 5;
    })

    .then((value) => {
        console.log("Final Result:", value);
    })

    .catch((error) => {
        console.log(error);
    });