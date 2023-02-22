const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('enter your name?',(answer)=>{
    console.log(`hello ${answer}`)
    rl.close() 
})
