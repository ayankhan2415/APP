const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const postSchema = new mongoose.Schema({

   job_title:{
       type: String,
       required: true
    },
    job_description: {
     type: String,
     required: true
    },
    salary:{
      type: String,
      required: true
    },
    location:{
      type: String,
      required: true
    },
    country:{
      type: String,
      required: true
    },
    
    
})
mongoose.model('Post', postSchema);