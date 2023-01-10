const express = require('express');
require('./db/connection')

//models or collections 
const Student = require('./models/students')


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
// app.get('/', (req, res) => {
//     res.send("hello from me");
// })

//post data
app.post('/students', (req, res) => {
    console.log(req.body)
    const user = new Student (req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch(err => {
        res.status(400).send(err)  
    })
})




app.listen(port, ()=>{
    console.log(`port is running at ${port}`);
})