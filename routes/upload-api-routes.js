// Requiring our models
var db = require("../models");
// var upload = require('../public/js/multer')
const multer = require("multer");
var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_ID,
    api_secret: process.env.API_SECRET
})
// var cloudinary = require("../public/js/cloudinary")
var cloudinaryStorage = require("multer-storage-cloudinary");

const storage = cloudinaryStorage({ cloudinary: cloudinary, folder: "demo", allowedFormats: ["jpg", "png"], transformation: [{ width: 500, height: 500, crop: "limit" }] });
const parser = multer({ storage: storage });

module.exports = function (app) {
    // app.get("/api/upload", function (req, res) {
    //     db.Upload.findAll({}).then(function (dbUpload) {
    //         res.json(dbUpload)
    //     })
    // })

    // upload product
    app.post("/api/upload", function (req, res) {
        db.Upload.create({
            product_name: req.body.product_name,
            description: req.body.description,
            uploaded: true
        // });
    }).then(function () {
        console.log("You can upload image now!");
        //     // res.json(dbUpload);
        //     // res.redirect("/");
        // });

    });});


    app.post('/api/images', parser.single("image"), function (req, res) {
        var result = cloudinary.v2.uploader.upload(req.file.path)
        // res.send(result)
        // res.send(req.file);
        // console.log(req.file);

        // console.log(req.file.secure_url);

        db.Image.create({
            url: req.file.secure_url

        }).then(function (newImage) {
            db.Upload.update({
                // devoured: true,
                ImageId: newImage.id
            }, {
                    where: {
                        id: newImage.id
                    },
                    include: [db.Image]

                }).then(function () {
                    res.redirect("/");
                });

        });
    });




    // app.post('/api/images', parser.single("image"), (req, res) => {  
    //     console.log(req.file) // to see what is returned to you  
    //     const image = {};  
    //     image.url = req.file.url;  
    //     image.id = req.file.public_id;
    //     db.Image.create(image) // save image information in database    
    //     .then(function(newImage){
    //     res.json(newImage)})    
    //     .catch(function(err){
    //     console.log(err);
    //     }); 
    //     console.log(newImage);

    

};