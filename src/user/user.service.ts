import { PrismaService } from "src/prisma.service";
import { User } from "./user.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async getAllUser(): Promise<User[]> {
        return this.prisma.user.findMany()
    }

    async getUser(id:number): Promise<User | null> {
        return this.prisma.user.findUnique({where: {id:Number(id)}})
    }

    async createUser(data:User): Promise<User> {
        return this.prisma.user.create({
            data,
        })
    }

    async updateUser(id:number, data:User): Promise<User> {
        return this.prisma.user.update({
            where: {id:Number(id)},
            data: {login: data.login, password: data.password}
        })
    }

    async deleteUser(id:number): Promise<User> {
        return this.prisma.user.delete({
            where: {id:Number(id)},
        })
    }

    async validateLogin(login:string, password:string): Promise<User | null> {
        const user = await this.prisma.user.findFirst({
          where: {
            login,
          },
        });
      
        if (user && user.password === password) {
          return user;
        }
      
        return null;
    }      
}