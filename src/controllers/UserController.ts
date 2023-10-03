import { Request, Response, Router } from "express";
import { User } from "../models/User";
import { UserService } from "../services/UserService";

export class UserController{
    public path: string = "/user"
    public router = Router()
    private readonly userService: UserService = new UserService();

    constructor() {
        this.initRoutes()
    }

    private initRoutes() {
        this.router.get(this.path, this.getAllUsers.bind(this));
        this.router.get(this.path + '/:uid', this.getUserByUid.bind(this));
        this.router.post(this.path, this.postCreateUser.bind(this));
    }

    public async postCreateUser(req: Request, res: Response){
        const {uid, name, ra, password, team} = req.body;
        const newUser: User = {uid, name, ra, password, team};
        const isCreated = this.userService.createUser(newUser) != undefined;
        if (isCreated) {
            res.status(201);
        }else{
            res.status(400);
        }
    }
    
    public async getAllUsers(req: Request, res: Response) {
        const users = await this.userService.getUsers();
        if (users == undefined) {
            res.status(400);
        }else{
            res.status(200).send(users);
        }
    }

    public async getUserByUid(req: Request, res: Response) {
        const user = await this.userService.getUserByUid(req.params.uid);
        if (user == undefined){
            res.status(400);
        } else {
            res.status(200).send(user);
        }
    }
}
