const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

const cors = require('cors');


app.use(cors());
app.get( '/', (req, res) => {
    res.send('Ready To Contribute upcoming Full Stack Project')
})
app.listen( port , () => {
    console.log(`Our Awesome server in running on the port: ${port}`);
})