const fastify = require('fastify')({logger: true});
const config = require('./config/server.config');
const db = require('./models');
const jwt = require("jsonwebtoken");

// database connection
db.sequelize.sync({ force: true}).then(() => {
    console.log(`Database connected`);
}).catch((err) => {
    console.log(`Error occur at ${err}`);
});

// Routes
const {create, getAll} = require("./routes/app.routes");

// all token authentication done here
fastify.register(
  function (route, ops, done) {
    route.addHook('preHandler', (req, res, next) => {
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
      })
    })
    fastify.register(create);
    fastify.register(getAll);
    done();
})

// Server listen on port
const start = async () => {
  try {
    await fastify.listen({ port: config.port });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();