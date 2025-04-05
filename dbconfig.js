let  mongoose = require('mongoose')

mongoose.connect('mongodb+srv://rishitraiyani12345:4osNu33PLRM3RPoK@cluster0.fvqph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("database connected successfully..")
})
.catch((err)=>{
    console.log("error in confgiguration database",err)
})