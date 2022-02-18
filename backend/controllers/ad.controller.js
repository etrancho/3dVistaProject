const db = require("../models");
const Ad = db.ad;
const Op = db.Sequelize.Op;

// Create and Save a new ad
exports.create = (req, res) => {
    // Validate request
    if (!req.body.idA) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a ad
    const ad = {
        idA: req.body.idA,
        nameA: req.body.nameA,
        descriptionA: req.body.descriptionA,
        idCA: req.body.idCA
    };

    // Save regalo in the database
    Ad.create(ad)
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

// Retrieve all regalos from the database.
exports.findAll = (req, res) => {
    Ad.findAll().then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving it."
            });
        });
};

// Find a single advertisement with an id
exports.findOne = (req, res) => {
    const idA = req.params.idA;
    console.log("holqqqqqqqqq");
console.log(idA);
    Ad.findByPk(idA)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Advertisement with idA =" + idA
            });
        });
};

// Update a Advertisement by the id in the request
exports.update = (req, res) => {
    const idA = req.params.idA;

    Ad.update(req.body, {
        where: { idA: idA }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "It was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update advertisement with idA=${idA}. 
              Maybe it was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Advertisement with idA =" + idA
            });
        });
};

// Delete a Advertisement with the specified id in the request
exports.delete = (req, res) => {
    const idA = req.params.idA;

    Ad.destroy({
        where: { idA: idA }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Advertisement was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Advertisement with idA = ${idA}. Maybe Advertisement was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Advertisement with idA=" + idA
            });
        });
};