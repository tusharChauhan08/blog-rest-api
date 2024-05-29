let blogModel = require('../models/app.model');

let dataPost = async(req, res) => {
    try{
        // let { title, content, author, tag, createdAt} = req.body;
        let data = new blogModel(req.body);
        await data.validate();
        await blogModel.insertMany([data])
        .then((data) => {
            res.status(201).json(data);
        }).catch((error) => {
            res.status(400).json({"error": error.message});
        });
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({"error": error.message});
    }
}

module.exports = dataPost;