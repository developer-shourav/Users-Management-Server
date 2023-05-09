const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

const users = [
    {id:1, name:'Akibul', age:45},
    {id:2, name:'MokBul', age:55},
    {id:3, name:'Robiul', age:35},
    {id:4, name:'Dak Kno', age:25},
    {id:5, name:'Firoz', age:45}, 
];


// Middleware
app.use(cors())
app.use(express.json())


app.get( '/' , (req, res) => {
    res.send('Client welcoming You Dear')
})

app.get( '/users', (req, res) => {
    res.send(users)
})

app.post( '/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1 ;
    users.push(newUser)
    res.send(newUser)
})
app.listen(port, () => {
    console.log(`Our Awesome server is running on the PORT: ${port}`);
})