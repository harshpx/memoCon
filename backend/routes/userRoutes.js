import express from 'express';
import { registerUser, login, deleteUser, userDpUpload } from '../controllers/userControllers.js';
import protectRoute from '../middlewares/authMiddleware.js';
import upload from '../middlewares/fileUploadMiddleware.js';

const userRoutes = express.Router();

userRoutes.route('/').post(registerUser);
userRoutes.route('/login').post(login);
userRoutes.route('/delete').delete(protectRoute,deleteUser);
userRoutes.route('/uploadDP').put(protectRoute,upload.single("image"),userDpUpload);
userRoutes.route('/temp').post(upload.single("image"), (req,res)=>{
    if(!req.file) return;
    console.log(req.file);
})

export default userRoutes;