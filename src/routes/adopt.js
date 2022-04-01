import express from 'express';
import adoptController from '../controller/adopt';

const routes = express.Router();

routes.get('/', adoptController.root);

export { routes };
