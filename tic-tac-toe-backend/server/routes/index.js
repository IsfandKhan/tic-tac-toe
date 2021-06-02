import express from 'express';
import { get } from '../controllers/index';
const router = express.Router();

/* GET home page. */
router.get('/', get);

export { router };
