const router = require("express").Router();

// Import authentication controller
const authCntrl = require("../controllers/auth");

// Routes for Authentication
router.get("/auth/signup", authCntrl.auth_signup_get);
router.post("/auth/signup", authCntrl.auth_signup_post);
router.get("/auth/signin", authCntrl.auth_signin_get);
router.post("/auth/signin", authCntrl.auth_signin_post);

module.exports = router;
