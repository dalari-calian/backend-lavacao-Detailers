import { PrismaService } from "src/prisma.service";
import { Service } from "./service.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ServiceService {
    constructor(private prisma: PrismaService){}

    async getAllService(): Promise<Service[]> {
        return this.prisma.service.findMany()
    }

    async getService(id:number): Promise<Service | null> {
        return this.prisma.service.findUnique({where: {id:Number(id)}})
    }

    async createService(data:Service): Promise<Service> {
        return this.prisma.service.create({
            data,
        })
    }

    async updateService(id:number, data:Service): Promise<Service> {
        return this.prisma.service.update({
            where: {id:Number(id)},
            data: {
                name: data.name,
                time: data.time,
                price: data.price,
            }
        })
    }

    async deleteService(id:number): Promise<Service> {
        return this.prisma.service.delete({
            where: {id:Number(id)},
        })
    }
}