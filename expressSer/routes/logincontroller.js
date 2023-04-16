const Login = require("./loginmodel");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


exports.listAllLogin = async (req, res) => {
    try {
        const login = await Login.find({});
        res.status(200).send(login);
    }

    catch (error) {
        res.status(500).send(error);
    }
};

exports.getLogin = async (req, res) => {
    try {
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
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Check if the username already exists in the database
        const existingUser = await Login.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Create a new user document and save it to the database
        const newUser = new Login({ name, username, passwordHash, info });
        await newUser.save();

        return res.json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
exports.checkLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await Login.findOne({ username });
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (!user.passwordHash) {
        return res.status(500).json({ message: 'Internal server error' });
      }
    // Compare the submitted password with the hashed password from the database
    const passwordMatches = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatches) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT for the user
    const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });

    // Send the JWT back to the client
    res.json({ token });



};
