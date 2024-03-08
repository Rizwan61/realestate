var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    
    image: {
        type:String
    },
    

});


const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel