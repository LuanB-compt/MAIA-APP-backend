import { User } from "../models/User";
import { db } from "../database/firebase";
import { documentConverter } from "../utils/DocumentConverter";

export class UserRepository {
    constructor(){}

    public async findAllUsers(): Promise<User[] | undefined> {        
        const userRef = db.collection('user').doc('user').withConverter(documentConverter<User[]>());
        const doc = await userRef.get();
        const data = doc.data();
        return data;
    }

    // find user by id...
}