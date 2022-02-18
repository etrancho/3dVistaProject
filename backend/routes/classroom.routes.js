module.exports = app => {
    const classrooms = require("../controllers/classroom.controller.js");
    //const auth = require("../controllers/auth.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/create", classrooms.create);
  
    // Retrieve all User
    router.get("/", 
    //auth.isAuthenticated, 
    classrooms.findAll);
    
    // Retrieve a single User with id
    router.get("/:idC", 
    //auth.isAuthenticated, 
    classrooms.findOne);
  
    // Update a User with id
    router.put("/:idC", 
    //auth.isAuthenticated, 
    classrooms.update);

    // Sign in
    //router.post("/signin", 
    //auth.signin
    //);
  
    // // Delete a User with id
    // router.delete("/:id", users.delete);
  
    // // Create a new User
    // router.delete("/", users.deleteAll);
  
    app.use('/classrooms', router);
  };