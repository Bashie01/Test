// 1 + 3;
// console.log("HELLO THIS IS MY FIRST JS FILE!")
// let total = 1 + 20;
// console.log(total)

// let rating = 3;

// if (rating === 3) {
//     console.log("You are correct")
// } else {
//     console.log("You are not correct")
// }

// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5!")
//     console.log(random)
// } else {
//     console.log("Your number is greater than 0.5")
//     console.log(random)
// }

// const dayOfTheWeek = prompt('Enter Day:').toLowerCase();

// if (dayOfTheWeek === 'monday') {
//     console.log("boo Monday")
// } else if (dayOfTheWeek === "friday") {
//     console.log("yay Friday!")
// } else {
//     console.log("Meh")
// }

const password = prompt("Please enter your password: ")

if (password.length >= 6) {
        if (password.indexOf(" ") === -1) {
        console.log("Valid password.")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("Your password is too short.")
}