#! /usr/bin/env node 
// This line is called a shebang. it tells the OS to run it with nodejs.

// import the "inquirer" module, which is a commmand line interface for node.js 
import inquirer from "inquirer";

const input:{
    Sentence:string
}=await inquirer.prompt([
   {
     name:"Sentence",
     type:"input",
     message:"Enter you sentence to count the words!!!:"
   }
]);
const words=input.Sentence.trim().split(" ")
console.log(words);

console.log(`your sentence words are ${words.length}`)

