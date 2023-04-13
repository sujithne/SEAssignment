const Login = require("./loginmodel");

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
    // let login = new Login(req.body);
    // login.save()
    //     .then(login => {
    //         res.status(200).json({'login': 'user added successfully'});
    //     })
    //     .catch(err => {
    //         res.status(400).send('adding new user failed');
    //     });
    // try {
    //     const { name, username, password } = req.body;
    
    //     // Check if the username already exists in the database
    //     const existingUser = await Login.findOne({ username });
    //     if (existingUser) {
    //       return res.status(409).json({ message: 'Username already exists' });
    //     }
    
    //     // Create a new user document and save it to the database
    //     const newUser = new Login({ name, username, password });
    //     await newUser.save();
    
    //     return res.json({ message: 'User created successfully' });
    //   } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({ message: 'Internal server error' });
    //   }
// 
try {
    const { name, username, password, info } = req.body;

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

};
