require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const dbURI ='mongodb+srv://kulkarnisarvesh96:Sarvesh_2001@cluster0.yeo3qzp.mongodb.net/';
mongoose.connect(dbURI).then(()=> console.log('MongoDB connected')).catch(err=> console.log(err));

//User model
const User = require('./models/User');

//Registration route
app.post('/api/register', async(req, res) => {
    const { firstname, lastname, email, password} = req.body;
    try {
        let user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ msg: 'User already exists'});
        }

        //Create new user
        user = new User({
            firstname, 
            lastname,
            email,
            password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        //return jsonwebtoken
        const payload = {
            user: {
                id: user.id,
            }
        };

        jwt.sign(
            payload, 
            '1b31452d25e07af5f829ae3e170b66a9118279ac93c0ba48e696163688917bd76dfd10686287df943a5635f7f09b59fbf479ccb943617f14708c027d6afe072a ',
            { expiresIn: 360000},
            (err, token) => {
                if(err) throw err;
                res.json({ token });
            }
        );
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
