const {MongoClient, ServerApiVersion }= require("mongodb"); 


const dbConnect = ()=>{
    const connectionString = process.env.ATLAS_URI;
    return client = new MongoClient (connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });
}

let dbConnection;

module.exports = {
    connectToServer: function (callback) { 
        dbConnect()
        client.connect(function (err, db) { 
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db ("TasksList"); 
            console.log("Successfully connected to MongoDB.");

            return callback();
        });
    },

    getDb: function () {
        return dbConnection;
    },
};