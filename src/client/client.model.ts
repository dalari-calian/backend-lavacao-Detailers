import { Prisma } from "@prisma/client";


export class Client implements Prisma.ClientCreateInput {
    id: number;
    createdAt: Date;
    firstName: string;
    lastName: string;
    cpf: string;
    email: string;
    phone: string;
}