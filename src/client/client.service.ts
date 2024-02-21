import { PrismaService } from "src/prisma.service";
import { Client } from "./client.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientService {
    constructor(private prisma: PrismaService){}

    async getAllClient(): Promise<Client[]> {
        return this.prisma.client.findMany()
    }

    async getClient(id:number): Promise<Client | null> {
        return this.prisma.client.findUnique({where: {id:Number(id)}})
    }

    async createClient(data:Client): Promise<Client> {
        return this.prisma.client.create({
            data,
        })
    }

    async updateClient(id:number, data:Client): Promise<Client> {
        return this.prisma.client.update({
            where: {id:Number(id)},
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                cpf: data.cpf,
                email: data.email,
                phone: data.phone,
            }
        })
    }

    async deleteClient(id:number): Promise<Client> {
        try {
            return await this.prisma.client.delete({
                where: {id:Number(id)},
            });
        } catch (error) {
            throw error;
        }
    }
}