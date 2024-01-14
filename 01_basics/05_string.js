function chai(){
    let username = "hitesh"
    console.log(this.username)
}

chai()

const min = 10;
const max = 20;
const range = max - min + 1;

const randomNumber1 = Math.floor(Math.random() * range) + min;
const shiftedRandomNumber1 = Math.floor((Math.random()  + min)*range);

console.log("Random number 1:", randomNumber1);
console.log("Shifted Random number 1:", shiftedRandomNumber1);
console.log(range);

let myDate = new Date()
console.log(`required date is $(myDate.getDay())`)