import express from 'express';

import { checkIfAdmin } from '../controllers/admins.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/checkIfAdmin/:id', checkIfAdmin);

export default router;
