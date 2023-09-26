import { User } from "../entities/User";
import { db } from "../database/firebase";
import { documentConverter } from "../utils/DocumentConverter";

export class UserService {
    constructor(){

    }

    public async getUsers(): Promise<User[]>{
        const userRef = db.collection('user').doc('user').withConverter(documentConverter()).get();
        const doc = await userRef.get();
        return 
    }
}