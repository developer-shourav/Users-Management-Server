const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    res.send('I am Ready To Make Awesome Server')
})

app.listen( port, () => {
    console.log(`Our Server is running On the port: ${port}`);
})