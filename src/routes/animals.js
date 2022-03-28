import express from 'express';
import animalsController from '../controller/animals';
import petController from '../controller/pet';

const animals = express.Router();

animals.get('/', animalsController.root);
animals.get('/:petType', animalsController.show);
animals.get('/:petType/:pet', petController.show);

export { animals };
