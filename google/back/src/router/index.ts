import express from 'express';
import googleRouter from './google';
import eventRouter from './meet';
import axios from 'axios';

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send("home");
// });
router.use('/google', googleRouter);
router.use('/meet', eventRouter);
export default router;
