const db = require("../models");
const Classroom = db.classroom;
const Op = db.Sequelize.Op;

// Create and Save a new ad
exports.create = (req, res) => {
    // Validate request
    if (!req.body.idC) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
  
    // Create a ad
    const classroom = {
      idC: req.body.idC,
      nameC: req.body.nameC,
      studentsC: req.body.studentsC
    };
    
    // Save Classroom in the database
    Classroom.create(classroom)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating it."
        });
      });
  };

  // Retrieve all Classroom from the database.
exports.findAll = (req, res) => {
    Classroom.findAll().then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving it."
        });
      });
  };
 
  // Find a single Classroom with an id
  exports.findOne = (req, res) => {
    const idC= req.params.idC;
  
    Classroom.findByPk(idC)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Classroom with idC=" + idC
        });
      });
  };
  
  // Update a Classroom by the id in the request
exports.update = (req, res) => {
    const idC = req.params.idC;
  
    Classroom.update(req.body, {
      where: { idC: idC }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "It was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update aClassroom with idC=${idC}. 
              Maybe it was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Classroom with idC =" + idC
        });
      });
  };

  // Delete a Classroom with the specified id in the request
exports.delete = (req, res) => {
    const idC = req.params.idC;
  
    Classroom.destroy({
      where: { idC: idC }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Classroom was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Classroom with idC = ${idC}. Maybe Classroom was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Classroom with idC=" + idC
        });
      });
  };
  