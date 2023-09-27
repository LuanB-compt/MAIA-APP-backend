import { Request, Response, Router } from "express";
import { Container, Service } from 'typedi';

import { UserService } from "../services/UserService";

export class UserController{
    public path: string = "/user"
    public router = Router()
    private userService: UserService = new UserService();

    constructor() {
        this.initRoutes()
    }

    private initRoutes() {
        this.router.get(this.path, this.getAllUsers.bind(this));
    }
    
    public async getAllUsers(req: Request, res: Response) {
        const users = await this.userService.getUsers();
        if (users == undefined) {
            res.status(400);
        }else{
            res.status(200).send(users);
        }
    }
}
