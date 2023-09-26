import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController{
    constructor(){
        console.log("Initialized the router manager");
    }

    public endpoint(req: Request, res: Response){
        console.log(req.method);
        res.json({message: "Hello world"});
    }

    public async getUsers(req: Request, res: Response) {
        res.status(200).send()
    }
}
