 ## API for Student Management System 

### Technology Required
 + Node js
 + Mongo db
 + Express 

- http://localhost:3000/api/v1/userregister

     - Method  : POST
     - Reqbody  : JSON
    
     ```sh
       {
         "name" : "chetan",
         "mobile" : 7757842157,
         "city" : "Pune",
         "role" : "Teacher",
         "email" : "cchetantayade@gmail.com",
         "password" : "admin@123",
         "courses" : "Java"
        }
     ```


- http://localhost:3000/api/v1/user/login
     - Method  : POST
     - Reqbody  : JSON
    
   ```sh
       {
       "role" : "Teacher",
       "email" : "cchetantayade@gmail.com",
       "password" :"admin@123"
        }
    ```


- http://localhost:3000/api/v1/teacher/assignCourse
     - Method   : POST
     - Reqbody  : JSON
    
   ```sh
      {
    	 "studentId" : "cchetantayade@gmail.com",
	     "courseName" : ["Java Script","Node js"]
      }
    ```


    
- http://localhost:3000/api/v1/teacher/createCourse
     - Method   : POST
     - Reqbody  : JSON
    
   ```sh
      {
    	"courseName" : "Java SCript",
      	"courseId"  : "js101",
      	"courseDuration" : 24
      }
    ```

- http://localhost:3000/api/v1/teacher/deleteCourse
     - Method   : POST
     - Reqbody  : JSON
    
   ```sh
      {
    	"course_name" : "Java SCript"
      }
    ```    