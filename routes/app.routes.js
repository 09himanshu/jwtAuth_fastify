
const controller = require('../controller/user.controller');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: "./controller/images/",
  filename: (req, file, cb) => {
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
    storage: storage
})


async function create(fastify) {
  try {
      fastify.post("/api/v1/log",controller.create);
  } catch (err) {
      console.log(`Error occur at ${err}`);
  }
}

async function getAll(fastify) {
  try {
    fastify.get("/api/v1/log/:id",controller.getAll);
  } catch (err) {
    console.log(`Error occur at ${err}`);
  }
}

module.exports = {
  create, getAll
}