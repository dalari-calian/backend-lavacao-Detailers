import { Prisma } from "@prisma/client";


export class Service implements Prisma.ServiceCreateInput {
    id: number;
    name:  string;
    time:  number;
    price: number;
}