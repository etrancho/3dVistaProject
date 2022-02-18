module.exports = (sequelize, Sequelize) => {
    const Ad = sequelize.define("ad", {
      idA: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      nameA: {
        type: Sequelize.STRING
      },
      descriptionA: {
        type: Sequelize.STRING
      },
     
      idCA: {
        type: Sequelize.INTEGER,
        references: {
            model: 'classrooms',
            key: 'idC',
        }
      }
    
      
    });
  
    return Ad;
  };