import 'reflect-metadata';
import { UserController } from './controllers/UserController';
import App from './app';

const app = new App(
    [
      new UserController(),
    ],
    3000,
);
   
app.listen();