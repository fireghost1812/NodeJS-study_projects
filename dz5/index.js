const express = require('express');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const tasks = require('./models/tasks');

const app = express();

app.use(bodyParser.json());

app.engine('hbs', consolidate.handlebars);
app.set('view engine','hbs');
app.set('views', `${__dirname}/views`);

app.get('/users/:id', (reg,res)=>{
    console.log(req.params.id);
    res.render('hello',{
        username:'Ivan'
    })
});

app.get('/tasks', (req,res)=>{
    tasks.list().then(function(tasks){
        res.render('tasks',tasks);
    },function(err){
        console.log(err);
    });
});

app.listen(8888);