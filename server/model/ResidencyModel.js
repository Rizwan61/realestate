var mongoose = require('mongoose');


var ResidencySchema = new mongoose.Schema({

   title:{
    type:String
   },
   description:{
    type:String
   },
   price:{
    type:String
   },
   address:{
    type:String
   },
   city:{
    type:String
   },
   country:{
    type:String
   },
   useremail:{
    type:String
   },
   image:{
    type:String
   },
    

});


const ResidencyModel = mongoose.model('residency', ResidencySchema);
module.exports = ResidencyModel