
const fs = require("fs");

const {fibonacci} = require("./fibonacci.js");


fs.readFile("./number.txt", "utf-8", function(error, data) {
    if (error){
        console.log(error);
    }
    else{
        console.log(`fibonacci de ${data}: ` , fibonacci(data));
    }
});

//console.log(fibonacci(5));