let express = require("express");
require('dotenv').config()
require('./dbconfig')
const cors = require('cors');
let app = express();

app.use((req, res, next) => {
    console.log('Request received:');
    next();
});


app.use(cors());
let UserRoutes=require('./Routes/UserRoutes')
app.use(express.json())
app.use('/User',UserRoutes)

let MechanicRoutes=require('./Routes/MechanicRoutes')
app.use(express.json())
app.use('/Mechanic',MechanicRoutes)

let ServiceRoutes=require('./Routes/ServiceRoutes')
app.use(express.json())
app.use('/Service',ServiceRoutes)

let ComplainRoutes=require('./Routes/ComplainRoutes')
app.use(express.json())
app.use('/Complain',ComplainRoutes)


app.listen(process.env.PORT,(err)=>{
    if(!err)
    {
        console.log('server running on 8000');

    }
})