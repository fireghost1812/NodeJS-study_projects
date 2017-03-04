const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport('SMTP',{
    service:'Gmail',
    auth:{
        user:'requestmaillesson3@gmail.com',
        pass:'request12345'
    }
});
const mailOption = {
    from:'Vladimir Putin <requestmaillesson3@gmail.com>',
    to:'dmitrii.sk@gmail.com',
    subject:'Hello',
    text:'Hello world'
};

smtpTransport.sendMail(mailOptions,function(err,response){
    if(err){
        throw
    }
});

const request = require('request');
const cheerio=require('cheerio');
request('http://rbc.ru',(err,res,html)=>{
    if(!err&& res.statusCode==200){
        const $=cheerio.load(html);
        console.log('Rere', $('span.indikators_vert_ticker_val1').eq(0).text());
    }
});

const fs=require('fs');
const prosifiedReadFile = file => new Promise((resolve,reject)=>{
    fs.readFile('file.txt',(err,data)=>{
        if(err){
            reject(err);
        } else{
            resolve(data.toString());
        }
    });
});
prosifiedReadFile('file.txt').then(
    (data)=>{console.log(data); return new },
    (err)=>{console.loq(err)}
).then(

);

Promise.all([]).then();