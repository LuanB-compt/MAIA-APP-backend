import { User } from "../models/User";
import { db } from "../database/firebase";
import { documentConverter } from "../utils/DocumentConverter";

export class UserRepository {
    constructor(){}

    public async createUser(user: User): Promise<User | undefined> {
        //return (await db.collection('user').add(user)).set(user)
        // console.log("passou 2", )
        (await db.collection('user').add(user)).set(user);
        return user;
    }

    public async findAllUsers(): Promise<User[] | undefined> {        
        const userRef = db.collection('user').doc('user').withConverter(documentConverter<User[]>());
        const doc = await userRef.get();
        const data = doc.data();
        return data;
    }

    public async findUserByUid(uid: string): Promise<User | undefined>{
        const user = db.collection('user').where("uid", "==", uid).withConverter(documentConverter<User>());
        const doc = await user.get();
        const data = doc.docs[0] == undefined ? undefined : doc.docs[0].data();
        return data;
    }

    public async findUserByRa(ra: number): Promise<User | undefined>{
        const user = db.collection('user').where("ra", "==", ra).withConverter(documentConverter<User>());
        const doc = await user.get();
        const data = doc.docs[0] == undefined ? undefined : doc.docs[0].data();
        console.log("passou 1")
        return data;
    }
}