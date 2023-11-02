import { Prisma } from "@prisma/client";


export class User implements Prisma.UserCreateInput {
    id: number;
    login: string;
    password: string;
    createdAt: Date;
}