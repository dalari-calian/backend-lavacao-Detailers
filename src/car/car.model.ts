import { Prisma } from "@prisma/client";


export class Car implements Prisma.CarCreateInput {
    id: number;
    createdAt: Date;
    modelName: string;
    carBrand: string;
    licensePlate: string;
    carColor: string;
    carOwner: string;
}