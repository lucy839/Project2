// havent added any validation yet.. just basic skeleton now
module.exports = function (sequelize, DataTypes) {
    var Image = sequelize.define("Image",{
        url:{
         type: DataTypes.STRING
        }
    })

    // connecting image with other data
    Image.associate = function (models) {
       Image.hasMany(models.Upload, {
        });
    };
  
    return Image;
}