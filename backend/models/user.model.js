module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      idU: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      passU: {
        type: Sequelize.STRING
      },
      nameU: {
        type: Sequelize.STRING
      },
      emailU: {
        type: Sequelize.STRING
      },
      tfU: {
        type: Sequelize.INTEGER
      },
      idCU: {
        type: Sequelize.INTEGER,
        references: {
            model: 'classrooms',
            key: 'idC',
        }
      }
    });
  
    return User;
  };