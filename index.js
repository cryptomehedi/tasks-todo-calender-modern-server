
const express = require('express')
const cors = require('cors'); 
const { MongoClient, ServerApiVersion , ObjectId } = require('mongodb');
const { dbConnect, connectToServer } = require('./utils/DBConnect');
const TasksRouter = require('./Routes/Tasks.routes');
require('dotenv').config() 
const app = express()
const port = process.env.PORT || 4000



// mid ware
app.use(cors())
app.use(express.json())

// dbConnect()

// mongodb connection
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ouoh3.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



connectToServer((err)=>{
    if(!err){
        app.listen(port, ()=> {
            console.log( 'Server running', port);
        })
    } else {
        console.log(err);
    }
})


app.use('/api/task', TasksRouter )












app.get('/', (req, res) => {
    res.send('Server running Successfully')
})

app.get('*', (req, res) =>{
    res.send("No route Found")
})

// app.listen(port, ()=> {
//                 console.log( 'Server running', port);
//             })