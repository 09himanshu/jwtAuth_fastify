
const db = require('../models');
const User = db.user;

exports.create = async(req, res) => {
    const obj = {
        profile_img: req.body.profile_img,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dob: req.body.dob,
        address: req.body.address,
        email: req.body.email,
        phone_no: req.body.phone_no,
        sub: req.body.sub,
        subscription_key: req.body.subscription_key,
    };
    try {
      const user = await User.create(obj);
      return res.status(201).send(user);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: `Error occur at ${err}` });
    }
}

exports.getAll = async(req, res) => {
    try {
        let id = req.params.id;
        const user = await User.findByPk(id)
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
}