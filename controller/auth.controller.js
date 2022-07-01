const bcrypt = require('bcryptjs');
const config = require('../config/server.config');
const jwt = require('jsonwebtoken');
const db = require('../models');
const Auth = db.auth;

exports.signup = async(req, res) => {
    const obj = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      sub: req.body.sub
    };
    try {
        const auth = await Auth.create(obj);
        res.status(200).send(auth);
    } catch (err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
}

exports.signin = async (req, res) => {
    try {
        const user = await Auth.findOne({where: {email: req.body.email}});
        if(!user) return res.status(404).send({message: `User not found`});
        const isValid = await bcrypt.compareSync(req.body.password, user.password);
        if(!isValid) return res.status(403).send({message: `Invalid password`});

        let token = jwt.sign({sub: user.sub},config.secret, {expiresIn: 600} );
        res.status(200).send({
            token: token,
            email: user.email,
        })
    } catch (err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
};