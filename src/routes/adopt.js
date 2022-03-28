import express from 'express';
import recipeController from '../controller/adopt';

const routes = express.Router();

/* ###### RECIPE */
routes.get('/', () => console.log('hello'));
// routes.get('/recipe/:id', recipeController.getRecipe);
// routes.get('/search/query=:query&flag=:flag', recipeController.searchRecipe);
// routes.post('/recipe', recipeController.createRecipe);

export { routes };
