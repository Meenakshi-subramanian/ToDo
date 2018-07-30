const mongoose= require('mongoose');
const Schema = mongoose.Schema;

let todoschema= new Schema({
    title : {type:String},
    description:{type:String},
    date:{type:Date},
    status:{type:Boolean}
});

module.exports=mongoose.model('Todo',todoschema);
