const { Console } = require('console')
const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('enter your name',(answer)=>{
    console.log(`hello ${answer}`)
    rl.close()
})

var evname=process.evn.USERNAME

Console.log("hello"+" "+evname)
const fs=require('fs')

const name=process.argv[2]
console.log("hello"+name)