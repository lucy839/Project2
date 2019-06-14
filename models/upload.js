// havent added any validation yet.. just basic skeleton now
module.exports = function (sequelize, DataTypes) {
    var Upload = sequelize.define("Upload", {
        product_name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        uploaded: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    // needs to link to user once Steven has login done:)
    Upload.associate = function(models) {
        Upload.belongsTo(models.Image, {
        });
     };

    return Upload;
}