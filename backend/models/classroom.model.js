module.exports = (sequelize, Sequelize) => {
    const Classroom = sequelize.define("classroom", {
      idC: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      nameC: {
        type: Sequelize.STRING
      },
      studentsC: {
        type: Sequelize.INTEGER
      },
     
      
    
      
    });
  
    return Classroom;
  };