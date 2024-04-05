import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { contact } from '../controllers/contact.js';

const router = express.Router();

// router.post("/contact" , isAuthenticated , contact);
router.post("/contact" , contact);

export default router;