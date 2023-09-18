import { Request, Response } from "express";
//const { initializeApp } = require("firebase-admin/app");
import { initializeApp } from "firebase-admin/app";

export class Controller{
    constructor(){
        console.log("Initialized the router manager");
    }

    public endpoint(req: Request, res: Response){
        console.log(req.method);
        res.json({message: "Hello world"});
    }
}