const readline = require('readline');
const minimist=require('minimist');
const fs = require('fs');
const colors = require('colors');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});
// Действия с вводом пользователя
const pathLogFile = toString(process.argv.slice(2)[0]);
let stateGame = {attempt:0, wins:0, loosies:0}; //начальное состояние
rl.on('line', cmd => { 
       //state = 1 = head; 2 =tail
      const arrHOT=[1,2];
      const randHandAndTail = arrHOT[Math.round(Math.random())];
      const {attempt,wins,loosies}=stateGame; // деструктуризация объекта состояния игры
      stateGame.attempt+=1;
    switch (cmd) {
      case 1: // head
        head=0;
        if(head === randHandAndTail){
          stateGame.wins+=1;
          console.log('You win');
        } else{
          stateGame.loosies+=1;
          console.log('You loose');
        }
        break;
      case 2: // tail
        tail=1;
        if(tail === randHandAndTail){      
          stateGame.wins+=1;
          console.log('You win');
        } else{         
          stateGame.loosies+=1;
          console.log('You loose');
        }
        break;
    }
    rl.prompt();
    rl.close();
    console.dir(stateGame);
  }
).on('close', () => {
  fs.writeFile('err.txt','HeadOrTails.txt', (err,data)=>{
    if(err){ throw err;
    console.error('ошибка');
    }
    if(data){
    console.dir(stateGame);
    } 
  });
  console.log('Конец!');
  fs.writeFile(pathLogFile, JSON.stringify(stateGame), () => {
    process.exit(0);
  });
});

fs.readFile(pathLogFile, 'utf-8', (err, data) => { // Если в файле для лога уже есть данные, взять их. Иначе создать новый объект
  if (err) throw err;
  if (data) {
    stateGame = JSON.parse(data);
  } else {
    stateGame= {attempt:0, wins:0, loosies:0};
  }
})
