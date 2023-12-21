const user = {
    username: "hammad",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hammad"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hammad"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hammad"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // that called implicit return it wont require any of the return statement.

// const addTwo = (num1, num2) => ( num1 + num2 ) // automatiicaly, create the block which is invoked immeditely.

const addTwo = (num1, num2) => ({username: "hammad"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()