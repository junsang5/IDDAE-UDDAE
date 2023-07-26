import express from 'express';
import ctrl from '../controller/meet';

const router = express.Router();

router.post('/create', ctrl.createMeet);
router.get('/access', ctrl.access )

export default router;