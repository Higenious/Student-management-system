const mongoose =  require('mongoose');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;


let users = new Schema({
  name : {type:String, maxlength:20},
  email : {type:String, required:false},
  city : {type:String, required:true},
  role : {type:String, enum : ['Admin','Teacher', 'student'], default: 'student'},
  mobile : {type:Number, maxlength:11},
  courses : { type : Array, unique: true, dropDups: true},
  password : {type: String, required:false},
})

let courses  = new Schema({
  courseName : {type:String,unique: true, dropDups: true},
  courseId : {type:String},
  courseDuration : {type:Number},
  courseAssinee : {type:String} 
})



/**exporting modules */
module.exports.users = mongoose.model('users', users);
module.exports.courses = mongoose.model('courses', courses);