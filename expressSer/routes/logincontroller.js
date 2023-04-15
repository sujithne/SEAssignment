const Login = require("./loginmodel");
const bcrypt = require('bcrypt');


exports.listAllLogin = async (req, res) => {
    try{
        const login = await Login.find({});
        res.status(200).send(login);
        }
    
    catch (error) {
        res.status(500).send(error);
    }
};

exports.getLogin = async (req, res) => {
    try{
        const login = await Login.findById(req.params.id);
        res.status(200).send(login);
        }
    
    catch (error) {
        res.status(500).send(error);
    }
}

exports.createNewLogin = async (req, res) => {
try {
    const { name, username, password, info } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if the username already exists in the database
    const existingUser = await Login.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Create a new user document and save it to the database
    const newUser = new Login({ name, username, password, info });
    await newUser.save();

    return res.json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }

//   exports.logout = async (req, res) => {
//     try{
//         req.session.destroy();
//         res.status(200).send('User logged out successfully.');
//     }catch(error){
//         console.log(error);
//     }
//   }

};
