
const residencyCRTL = require("../controller/ResidencyController.js");
const checkAuth = require("../middleware/checkAuth.js")
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer ({storage : storage});
const  express =  require("express");


const ResidencyRoute = express.Router()

// Create new Residency post

ResidencyRoute.post("/residencies",[checkAuth, upload.single('image')],residencyCRTL.createPost)
ResidencyRoute.get("/allresidencies",residencyCRTL.allPosts)
ResidencyRoute.get("/myallresidencies",checkAuth,residencyCRTL.myPosts)


module.exports = ResidencyRoute;