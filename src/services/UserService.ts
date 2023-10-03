import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    private readonly userRepository: UserRepository = new UserRepository();

    constructor(){}

    public async createUser(user: User): Promise<User | undefined> {
        const {ra} = user;
        const userExists = await this.userRepository.findUserByRa(ra);
        console.log(userExists)
        if (userExists == undefined){
            return this.userRepository.createUser(user);
        }
        else {
            return undefined;
        }
    }

    public async getUsers(): Promise<User[] | undefined> {
        return this.userRepository.findAllUsers();
    }

    public async getUserByUid(uid: string): Promise<User | undefined>{
        return this.userRepository.findUserByUid(uid);
    }
}