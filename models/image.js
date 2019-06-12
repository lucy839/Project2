// havent added any validation yet.. just basic skeleton now
module.exports = function (sequelize, DataTypes) {
    var Image = sequelize.define("Image",{
        url:{
         type: DataTypes.STRING
        }
    })

    // needs to link to user once Steven has login done:)
    Image.associate = function(models) {
        Image.belongsTo(models.Upload,{
        });
    };
  
    return Image;
}