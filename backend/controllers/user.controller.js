const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const utils = require("../utils");
const  bcrypt  =  require('bcryptjs');

// Create and Save a new User
 exports.create = (req, res) => {
  //Validate request
  if (!req.body.passU || !req.body.nameU) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User
  let user = {
    //idU: req.body.idU,
    passU: req.body.passU,
    nameU: req.body.nameU,
    emailU: req.body.emailU,
    tfU: req.body.tfU,
    idCU: req.body.idCU
  };

  User.findOne({ where: { nameU: user.nameU } })
    .then(data => {
      console.log("llego")
      if (data) {
        console.log("llego found")
        const result = bcrypt.compareSync(user.passU, data.passU);
        if (!result) return res.status(401).send('Password not valid!');
        const token = utils.generateToken(data);
        // get basic user details
        const userObj = utils.getCleanUser(data);
        // return the token along with user details
        return res.json({ user: userObj, access_token: token });
      }
      console.log("arrived before bcrypt")
      user.passU = bcrypt.hashSync(req.body.passU);

      console.log(user);

      // User not found. Save new User in the database
      User.create(user)
        .then(data => {
          console.log("creqted")
          const token = utils.generateToken(data);
          // get basic user details
          const userObj = utils.getCleanUser(data);
          // return the token along with user details
          return res.json({ user: userObj, access_token: token });
        })
        .catch(err => {
          console.log("errrooo")
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
          console.log(err.message)
        });
    })
    .catch(err => {
      
      console.log("errrooo2")
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
      console.log(err.message)
    });

};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {

  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const idU = req.params.idU;

  User.findByPk(idU)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + idU
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const idU = req.params.idU;

  User.update(req.body, {
    where: { idU: idU }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${idU}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + idU
      });
    });
};

// // Delete a User with the specified id in the request
exports.delete = (req, res) => {
const id = req.params.id;

   User.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "User was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete User with id=${id}. Maybe User was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete User with id=" + id
       });
     });
 };

// // Delete all Users from the database.
// exports.deleteAll = (req, res) => {
//   User.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials."
//       });
//     });
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   User.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };

// Find user by username and password
exports.findUserByUsernameAndPassword = (req, res) => {
  const user = req.body.nameU;
  const pwd = req.body.passU;

  User.findOne({ where: { nameU: user, passU: pwd } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};