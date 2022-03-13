const express = require('express');

const authMiddleware = require('./middlewares/authMiddleware');

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const ModuleController = require('./controllers/ModuleController');
const ClassController = require('./controllers/ClassController');

const routes = express.Router();

routes.post('/auth', AuthController.authenticate);

routes.get('/users', authMiddleware.authMiddleware, UserController.index);
routes.post('/users', UserController.store);

routes.get('/modules', ModuleController.index);
routes.post('/modules', ModuleController.store);
routes.put('/modules/:module_id', ModuleController.edit);
routes.delete('/modules/:module_id', ModuleController.delete);

routes.get('/classes', ClassController.index);
routes.get('/modules/:module_id/classes', ClassController.moduleClasses);
routes.post('/modules/:module_id/classes', ClassController.store);
routes.put('/modules/:module_id/classes/:class_id', ClassController.edit);
routes.delete('/modules/:module_id/classes/:class_id', ClassController.delete);

module.exports = routes;
