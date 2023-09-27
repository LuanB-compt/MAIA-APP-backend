import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    private readonly userRepository: UserRepository = new UserRepository();

    constructor(){}

    public async getUsers(): Promise<User[] | undefined> {
        return this.userRepository.findAllUsers();
    }
}