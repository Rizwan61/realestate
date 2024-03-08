const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config();

const checkAuth = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];

        //check token is avaible in headers
        if (!token) {
            return res.json({
                status: "failed",
                message: "Authrization failed gg"
            })
        }

       
        //  if token avaible then verify its authrization and extract userid form it 
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // todo check if user id is availab in db

        // attaching userId with request to send on controller
        req.userId = decoded._id;
        next();
    } catch (error) {
        console.log(error.message)
        return res.status(403).json({status: "failed", message: 'Authentication failed. yy'})
    }
}
module.exports = checkAuth