const Router   = require('router')
const router = Router();
const usersController = require("../controller/usersController");


router.post('/userregister', usersController.userRegister);
router.post('/user/login', usersController.userLogin);
// Assign Courses to Student  
router.post('/teacher/assignCourse', usersController.assignCourse);
router.post('/teacher/createCourse',usersController.createCourse);
router.post('/teacher/deleteCourse',usersController.deleteCourse);



/**exports routes*/
module.exports = router;