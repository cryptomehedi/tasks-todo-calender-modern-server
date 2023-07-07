const { ObjectId } = require("mongodb")
const { TaskCollection } = require("../utils/DBCollection")


module.exports.getAllTask = async (req, res) =>{

    const email = req.query.user
    const query = {email}
    const results = await TaskCollection().find(query).toArray()
    res.send(results)
}

module.exports.postTask = async (req, res) => {
    const task = req.body.task
    const email = req.body.email
    const results = await TaskCollection().insertOne({email, task})
    res.send(results)
}

module.exports.putTask = async (req, res) => {
    const id = req.params.id
    const task = req.body 
    const filter = {_id: ObjectId(id)} 
    const options = { upsert: true }
    const updateDoc = {
        $set: task,
        } 
    const results = await TaskCollection().updateOne(filter, updateDoc, options)
    res.send(results) 
}

module.exports.completeTask = async (req, res) => {
    const id = req.params.id
    const status = req.body 
    const filter = {_id: ObjectId(id)} 
    const options = { upsert: true }
    const updateDoc = {
        $set: status,
        }
    const results = await TaskCollection().updateOne(filter, updateDoc, options)
    res.send(results)
}

module.exports.deleteTask = async (req, res) => {
    const id = req.params.id
    const filter ={_id: ObjectId(id)}
    const results = await TaskCollection().deleteOne(filter)
    res.send(results)
}