const request= require('request');
const cheerio = request('cheerio');
request('http://rbc.ru',(err,res,html)=>{
    if(!err && res.statusCode==200){
        const $=cheerio.load.html;
        console.log('Курс $:',$('span.indicators_vert_ticker_val1').eq(0).text());
    }
});