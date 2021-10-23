const jwt = require('jsonwebtoken');
var User = require('./dbManager').User;


const JWT_SECRET = "MostSecure";

function generateToken(user) {
    if (!user) {
        return null;
    }

    return jwt.sign(user.toJSON(), JWT_SECRET, { expiresIn: "1h" });
}

function verifyToken(token) {
    console.log(token);
    if (!token) {
        return null;
    }

    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (e) {
        return false;
    }
}

exports.verifyToken = function (req, res, next) {
    console.log(req.headers);
    console.log('verifying');
    if (verifyToken(req.headers['x-access-token'])) {
        return next();
    }
    console.log('verify fail');
    return res.status(401).send('Not authenticated!');
};

exports.login = function (req, res) {
    console.log(req.body.user);
    User.findOne({ "user": req.body.user }, function (err, found) {
        if (err) {
            res.status(401).json({
                status: "error",
                message: err,
            });
        } else {
            console.log("Login success - " + found.user + "; Access-level - " + found.access);

            const new_token = generateToken(found); 

            res.status(201).json({
                status: "success",
                message: "Logged in successfully",
                token: new_token
            });
        }
    });
};

exports.signup = function (req, res) {
    user = new User();
    user.user = req.body.user;
    user.access = req.body.access;


    user.save(function (err) {
        if (err) {
            res.status(401).json(err);
        } else {
            console.log("New User Created - " + user.user + "; Access-level - " + user.access);
            res.status(200).json({
                message: 'User created!',
            });
        }
    });
};