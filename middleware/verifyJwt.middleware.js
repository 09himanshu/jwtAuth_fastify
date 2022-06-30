




const verifyJwt = async (req, res, next) => {
  let token = req.headers['x-access-token'];
  // Check token
  if(!token) return res.status(403).send({message: `No token provided`});
  // verify token
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: `Unauthorized` });
    }
    // Reading the user from the token and setting it in the req object
    req.sub = decoded.sub;
    next();
  });
}

module.exports = {
    verifyJwt: verifyJwt
}