const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors');
const watchesroute = require('./routes/watchesroute')


app.use(cors());
app.use(express.json());
dotenv.config();
app.use('/public', express.static('./public'));


app.use(watchesroute);


mongoose.connect(`mongodb://${process.env.DB_URI}/${process.env.DB_NAME}`)
.then(() => {
    
    console.log('connected to database')
    app.listen(8000, () => {
        console.log('listening at: http://localhost:8000')
    })

}).catch((err)=>{
console.log(err)
})



