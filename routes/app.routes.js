
const controller = require('../controller/user.controller');
const {jwtVerify} = require('../middleware');

// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: "./controller/images/",
//   filename: (req, file, db) => {
//     return cb(
//       null,
//       `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// const upload = multer({
//     storage: storage
// })


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