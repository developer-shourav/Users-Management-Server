const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

const users = [
    {id:1, name:'Akibul', age:45, education:'Dhaka University'},
    {id:2, name:'MokBul', age:45, education:'Dhaka University'},
    {id:3, name:'Robiul', age:45, education:'Dhaka University'},
    {id:4, name:'Dak Kno', age:45, education:'Dhaka University'},
    {id:5, name:'Firoz', age:45, education:'Dhaka University'}
];





// Middleware

app.use(cors())

app.get('/', (req, res) => {
    res.send('I am Ready To Make Awesome Server')
});

app.get('/users', ( req, res) => {
    res.send(users)
});



app.listen( port, () => {
    console.log(`Our Server is running On the PORT: ${port}`);
});


