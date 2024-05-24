const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const UserModel = require('./models/User');

app.use(cors());
app.use(bodyParser.json());
const port = 5000;
//MongoDB connection
mongoose.connect('mongodb+srv://kulkarnisarvesh96:Sarvesh_2001@cluster0.yeo3qzp.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('Connected to MongoDB')).catch(err => console.log('Could not connect to mongo db...', err));

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

});

const User = mongoose.model('User', userSchema);

//Register route
app.post('/register', async(req, res) => {
    try{
        const {firstname, lastname, email, password} = req.body;
        let user = await User.findOne({email});
        if(user) {
            return res.status(400).send('User already exists');
        }
        //Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            firstname, 
            lastname, 
            email,
            password: hashedPassword,
        });

        await user.save();

        const token  = jwt.sign({ id: user._id}, '9a06372b660788e09abc2f0d7af0f6ad0e8deb167430e6a46b92202d1c1a8472278fbfeacabb8ed74cb1b96e64c023f1ebb0665d5772169bc825762a5ec8f6aa', {expiresIn: '1h'});
        res.status(200).json({ message: 'User registered successfully', token});
    } catch(err) {
        res.status(500).send('Error saving user');
    }
});


//login route
app.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).send('Invalid credentials');
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) {
            return res.status(400).send('Invalid credentials');
        }
        const token = jwt.sign({ id: user._id, firstname: user.firstname, lastname: user.lastname, email: user.email}, '9a06372b660788e09abc2f0d7af0f6ad0e8deb167430e6a46b92202d1c1a8472278fbfeacabb8ed74cb1b96e64c023f1ebb0665d5772169bc825762a5ec8f6aa', {expiresIn: '1h'});
        res.status(200).json({ message: 'User loggedn in successfully', token});
    } catch(err) {
        console.error(err);
        res.status(500).send("Error logging in user");
    }
});

app.get('/getUser', (req, res) => {
    UserModel.find().then(users=> res.json(users)).catch(err => res.status(err));
})
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});