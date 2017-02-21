const fs = require('fs');

fs.exists('file.txt', exists =>{
    if(exists){
        fs.readFile('file.txt', (err,text)=>{
            if(err) throw err;
            console.log(text.toString());
        })
    }else{
        console.error('ERROR');
    }
})

const readline=require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on('line',cmd =>{
    console.log(`sdf ${cmd.toString()}`);
    rl.close();
})
