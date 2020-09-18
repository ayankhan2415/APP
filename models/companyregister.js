const mongoose = require('mongoose');

const cpompanySchema = new mongoose.Schema({
  first_name:{
    type: String,
    required: true
 },
 last_name:{
  type: String,
  required: true
},
    business_name:{
       type: String,
       required: true
    },
    email: {
     type: String,
     required: true
    },
    password: {
      type: String,
      required: true
    }
})
mongoose.model('comp', cpompanySchema);