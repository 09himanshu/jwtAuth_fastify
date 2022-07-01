const controller = require('../controller/auth.controller');

async function signup(fastify) {
  try {
    fastify.post("/api/v1/signup", controller.signup);
  } catch (err) {
    console.log(`Error occur at ${err}`);
  }
}


async function signin(fastify) {
  try {
    fastify.post("/api/v1/signin", controller.signin);
  } catch (err) {
    console.log(`Error occur at ${err}`);
  }
}
module.exports = {
  signup, signin
}