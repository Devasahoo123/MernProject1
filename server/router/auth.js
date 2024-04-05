import express from "express";
import "../db/conn.js";
import signin from  "./signin.js";
import register from "./register.js";
import Auth from  '../middleware/auth.js';

const router=express.Router();
// const middeleware=((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
//     res.status(statusCode).json({
//       success: false,
//       statusCode,
//       message,
//     });
// });

router.use(express.json());
router.get( '/', (req, res) => {
    const name = req.query.name || 'World';
    res.send(`Hello ${name}!`);
});

router.get( '/about',Auth, (req, res) => {
    const name = req.query.name || 'about';
    res.send(req.rootUser);
});

router.get( '/contact', Auth,(req, res) => {
    const name = req.query.name || 'contact';
    res.send(`Hello ${name}!`);
});

router.get( '/signin', Auth,(req, res) => {
    const name = req.query.name || 'signin';
    res.send(`Hello ${name}!`);
});
router.get( '/signup', Auth, (req, res) => {
    const name = req.query.name || 'signup';
    res.send(`Hello ${name}!`);
});


/// register  user ////
router.post("/register", register);

//signin authentication
router.post('/signin', signin);

// logout
router.get( '/logout', (req, res) => {
    console.log('logging out');
    res.clearCookie("jwtoken", { path: "/" });
    res.status(200).send({ status: "Logged Out!" })
});

export default router;