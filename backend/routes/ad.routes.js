module.exports = app => {
    const ads = require("../controllers/ad.controller.js");
   //const auth = require("../controllers/auth.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/create", ads.create);
  
    // Retrieve all User
    router.get("/", 
    //auth.isAuthenticated, 
    ads.findAll);
    
    // Retrieve a single User with id
    router.get("/:idA", 
    //auth.isAuthenticated, 
    ads.findOne);
  
    // Update a User with id
    router.put("/:idA", 
    //auth.isAuthenticated, 
    ads.update);

    // Sign in
    /*router.post("/signin", 
    auth.signin
    );*/
  
    // // Delete a User with id
    // router.delete("/:id", users.delete);
  
    // // Create a new User
    // router.delete("/", users.deleteAll);
  
    app.use('/ads', router);
  };