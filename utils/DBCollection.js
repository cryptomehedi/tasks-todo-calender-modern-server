const { getDb } = require("./DBConnect")

module.exports= {
    TaskCollection : function(){
        return getDb().collection('tasks')
    }
}