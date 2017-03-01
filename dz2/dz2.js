const prompt = require('prompt');
const fs = require('fs');
const argv=require('minimist');
const url = require('url');
const readline = require('readline');

    const rl = readline.createInterface({
        input:process.stdin,
        output: process.stdout
    });
    //util.inspect(arg,{depth:N}); == console.dir(arg)  --if depth=2
    //console.log(process.env)
    //rl.on('line')
    rl.question('head or tail?', throwMoney =>{
        console.log('head or tail');
        const headsOrTails = {1:1,2:2};
        console.log(`You throw ${throwMoney}`);
        rl.close();

        let rand = toString(Math.random(Math.round(headsOrTails)*2));
            
        if(throwMoney == rand) {
            console.log(`You win`);
            console.log(`throwMoney:${result.throw}`);
            console.error(`throwMoney:${result.throw}`);
        } else {
            console.log(`you loose`);
            console.log(`throwMoney:${result.throw}`);
            console.error(`throwMoney:${result.throw}`);
        }

        console.log(until.inspect(arg));
    });
/*
fs.exists(path, callback) - проверка существования файла.
fs.readFile(filename, [options], callback) - чтение файла целиком.
fs.writeFile(filename, data, [options], callback) - запись файла целиком.
fs.appendFile(filename, data, [options], callback) - добавление в файл.
fs.rename(oldPath, newPath, callback) - переименование файла.
fs.unlink(path, callback) - удаление файла.
.
Функции callback принимают как минимум один параметр err, которые
равен null при успешном выполнении команды или содержит
информацию об ошибке. Помимо этого при вызове readFile передается
параметр data, который содержит объект типа Buffer, содержащий
последовательность прочитанных байтов. Чтобы работать с ним как со
строкой, нужно его сконвертировать:.
.
fs.readFile('/etc/passwd', function (err, data) {%
% if (err) throw err;%
% console.log(data.toString());%
});%*/
