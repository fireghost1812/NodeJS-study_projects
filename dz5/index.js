const express = require('express');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const tasks = require('./models/tasks')

const app = express();

app.use(bodyParser.json());

app.engine('hbs', consolidate.handlebars);
app.set('view engine','hbs');
app.set('views', `${__dirname}`);

app.get('/users/:id', (reg,res)=>{
    console.log(req.params.id);
    res.render('hello',{
        username:'Ivan'
    })
});

app.get('/tasks', (req,res)=>{
    tasks.list(function(err,tasks){
        if(err)//
        res.render('tasks',tasks);
    });
});

app.listen(8888);