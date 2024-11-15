const mongoose = require('mongoose');
var dotEnc=require("dotenv").config();
const plm = require('passport-local-mongoose');

const mongoAtlasUri = "mongodb+srv://freespree7103ashish:roar@carmanagement.p3utp.mongodb.net/?retryWrites=true&w=majority";

// Connect to the MongoDB cluster
mongoose.connect(mongoAtlasUri
  // , { useNewUrlParser: true, useUnifiedTopology: true }
  );

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Mongoose is connected");
});


// Define the schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  nameuser:String,
  password: {
    type: String,
  },
  profileImage:String,
  email: {
    type: String,
    
    
  },
  contact:Number,
  fullName: String,
  boards:{
    type:Array,
    default:[],
  },
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post",
  }]
});


userSchema.plugin(plm);

module.exports =  mongoose.model('User', userSchema);
