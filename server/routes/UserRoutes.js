
const UserCrtl = require("../controller/UserController");
const checkAuth = require("../middleware/checkAuth.js")

// const multer = require("multer")
// const upload = multer({ dest: "upload/" })
const  express =  require("express");


const userR = express.Router()


//  User API
userR.post("/login", UserCrtl.login);
userR.post("/signup", UserCrtl.signup);
userR.post("/verifytoken", checkAuth, UserCrtl.verifyToken);


module.exports = userR;