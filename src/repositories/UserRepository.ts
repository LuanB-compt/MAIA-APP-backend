import { User } from "../models/User";
import { db } from "../database/firebase";
import { documentConverter } from "../utils/DocumentConverter";

export class UserRepository {
    constructor(){}

    public async createUser(user: User): Promise<User | undefined> {
        (await db.collection('user').add(user)).set(user);
        return user;
    }

    public async findAllUsers(): Promise<User[] | undefined> {        
        const userRef = db.collection('user').doc('user').withConverter(documentConverter<User[]>());
        const doc = await userRef.get();
        const data = doc.data();
        return data;

        /*const usersRef = await db.collection('user').withConverter(documentConverter<User[]>()).listDocuments();
        const docs = await db.getAll(...usersRef);
        return docs[0].data();*/
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
        return data;
    }
}