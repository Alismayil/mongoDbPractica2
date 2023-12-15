
const mongoose = require('mongoose');
const {Schema} = mongoose;


const UserSchema = new Schema({
    title: String,
    description:String,
    category: [{type:String}],
    image: String
}, { timestamps: true });


 const Users = mongoose.model('Users', UserSchema);
module.exports=Users