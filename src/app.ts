import express from 'express';
import morgan from 'morgan'
import path from 'path'

import indexRoutes from './routes/index';

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/api', indexRoutes);
//public files
app.use('/uploads', express.static(path.resolve('uploads'))); //resuelve el path para cualquie S.O

export default app;