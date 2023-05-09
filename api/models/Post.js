const mongoose = require('mongoose');
const {Schema,model} = mongoose;


// Define the schema for the Post model
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  summary:{
 type:String,
 required:true
  },
  cover:{
    type:String
  },
  author:{type:Schema.Types.ObjectId, ref:'User'},


  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Post model using the schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
