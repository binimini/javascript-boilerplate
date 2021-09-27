const path = require('path');
const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended : true}));
app.use(express.static(path.join(__dirname, "/public")));

app.use('/',(req, res, next)=>{
    res.send('index.html');
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`listening on port ${process.env.PORT || 3000}...`);
})