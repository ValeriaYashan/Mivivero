const express = require("express");
const router = express.Router();
/*const multer = require('multer'); */
const usersController = require("../controllers/usersController");
/*const uploadFile = multer({ storage});*/
/* Vista login*/
router.get("/login", usersController.login);

/* LOGGED -------------------------------- */
router.post('/', usersController.logged);

/* REGISTER -------------------------------- */
router.get('/register', usersController.register);
router.post('/register', usersController.create);

/* LIST*/
router.get("/list", usersController.userList);
router.delete("/delete/:id", usersController.delete);

/* Imagenes*/
/*router.post('/register', uploadFile.single('avatar'), usersController.create);

/*const storage= multer.diskStorage({
    destination: function(req, file, cb) {       
     cb(null, './public/img/avatar');   
    filename: function(req, file, cb) {          
     cb(null, 
        '${Date.now()}_img_${path.extname(file.originalname)}'})        
    }
})*/
/*<form action= "/register" method="POST"
enctype= multipart/form-data">
</form>*/





module.exports = router;