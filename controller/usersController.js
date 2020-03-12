const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Student Controller");
const userModel = require("../models/usersModels").users;
const courseModel = require('../models/usersModels').courses;
const userService =  require('../services/userServices');


/** Register User  function 
 *  By default role student will be registered
 *  Specify roles of user (Teacher or Admin) 
*/
async function userRegister(req, res) {
  const reqBody = req.body;
  const emailID = req.body.email;
  const roles = req.body.role;
  console.log(emailID, roles);
  const availableRecords = await userModel.find({
    $and: [{ email: emailID, role: roles }]
  });
  console.log('/', availableRecords);
  if (availableRecords.length == 0) {
    const data =  await userModel(reqBody).save();
    if (data) {
      res.send('user registered successfully!');
    } else {
      res.send('error while registering user');
    }
  } else {
    res.send('User is Already present, Please Register with another email');
  }
}



/** login function  for user. 
 *  roles can be admin, teacher, student
 */

async function userLogin(req, res) {
  const reqBody = req.body;
  userService.checkUser(req.body, function (successData,errorData) {
    if (successData) {
      console.log(successData)
        let response = { message: "User Has been logged succcessfully!", success: true, data: successData }
        res.status(200).send(response);
    } else {
        res.send('Please Check your login creadentials');
    }
});
}




async function assignCourse(req, res){
  const emailId  =  req.body.studentId;
  const courses = req.body.courseName;
  const checkUser = await userModel.find({email : emailId});
  if(!checkUser.length == 0){
     logger.info('student is present');
    const result =  await userModel.findOneAndUpdate({email : emailId},{$addToSet: {courses: courses}});
    if(result){
      let response = { message: "Courses has been succcessfully Assigned", success: true, data: result }
      res.status(200).send(response);
    }
  }else{
    res.status(200).send('Please Enter valid Student Email ID'); 
} 
}



/** function create Course */
async function createCourse(req, res){
  const reqBody = req.body;
  const result = await courseModel(reqBody).save();
  if(result){
    let response = { message: "Course created succcessfully", success: true, data: result }
    res.status(200).send(response);
  }
}





/** delete Course */
async function deleteCourse(req, res){
  logger.info('deleting course by name');
  const courseName =  req.body.course_name;
  const result = await courseModel.findOneAndRemove({courseName :courseName});
  if(result == null){
    res.send('Enetered course name is not matching !');
  }else{
    res.send('course deleted succesfully!');
  }
}




/** export modules */
module.exports.userRegister = userRegister;
module.exports.userLogin = userLogin;
module.exports.assignCourse =assignCourse;
module.exports.createCourse= createCourse;
module.exports.deleteCourse =deleteCourse;
