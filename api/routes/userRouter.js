const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


// POST /users
//esta funcionando ok
router.post("/register", (req, res) => {
    userController.createUser(req, res);
});

// GET /users
//esta funcionando ok
router.get("/", (req, res) => {
    userController.findUsers(req, res);
});

//GET /me
router.get("/me", (req, res) => {
    userController.persistUser(req, res);
});

router.post("/login", (req, res) => {
    userController.loginUser(req, res);
});

router.post("/logout", (req, res) => {
    userController.logoutUser(req, res);
});


module.exports = router;