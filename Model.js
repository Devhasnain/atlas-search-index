const mongoose=require('mongoose');
const Model =mongoose.Schema({
    title:String,
});
module.exports=mongoose.model('movies',Model);