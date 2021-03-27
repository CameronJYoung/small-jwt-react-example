module.exports = (sequelize, Sequelize) => {
    const Beat = sequelize.define('beat', {
        name : {
            type: Sequelize.STRING
        },
        artist : {
            type: Sequelize.STRING
        },
        genre : {
            type: Sequelize.STRING
        },
        filePath : {
            type: Sequelize.STRING
        }
    })
    
    return Beat;
}