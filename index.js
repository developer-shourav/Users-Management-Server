const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ;

const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('This is User Management Server')
})


app.listen( port , () => {
    console.log(`Our Server is running on the port: ${port}`);
})