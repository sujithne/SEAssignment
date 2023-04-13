// import Invt and login Model
const Invt = require("./model");

const multer = require("multer");
const fs = require("fs");
const imageModel = require("./model");

// DEFINE CONTROLLER FUNCTIONS
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ 
    storage:storage 
}).single('image')

// listAllInvt function - To list all inventory
exports.listAllInvt = async (req, res) => {
    try{
        const invt = await Invt.find({});
        res.status(200).send(invt);
        }
    
    catch (error) {
        res.status(500).send(error);
    }
};

// createNewTodo function - To create new tinventory
exports.createNewInvt = async (req, res) => {
  
    upload(req, res, (err) =>{
        if(err){
            console.log(err);
        }else{
            const newImage = new Invt({
                name: req.body.name,
                quantity: req.body.quantity,
                image: {
                    data: fs.readFileSync(req.file.path),
                    contentType: req.file.mimetype
                  }
            });
            newImage.save()
            .then(()=> res.send("successfully uploaded "))
            .catch(err=>console.log(err));
        }
    })

};
exports.getInvt = async (req, res) => {
    try{
        const invt = await Invt.findById(req.params.id);
        res.status(200).send(invt);
        }
    
    catch (error) {
        res.status(500).send(error);
    }
}
// updateInvt function - To update todo status by id
exports.updateInvt = async (req, res) => {
    try {
        const invt = await Invt.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!invt) {
            return res.status(404).send();
        }
        res.status(200).send(invt);
    } catch (error) {
        res.status(500).send(error);
    }
};

// deleteTodo function - To delete todo by id
exports.deleteInvt = async (req, res) => {
    try {
        const invt = await Invt.findByIdAndDelete(req.params.id);
        if (!invt) {
            return res.status(404).send();
        }
        res.send(invt);
    } catch (error) {
        res.status(500).send(error);
    }
};

