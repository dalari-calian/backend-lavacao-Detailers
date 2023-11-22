import { PrismaService } from "src/prisma.service";
import { Car } from "./car.model";
import { Injectable, ConflictException } from "@nestjs/common";

@Injectable()
export class CarService {
    constructor(private prisma: PrismaService){}

    async getAllCar(): Promise<Car[]> {
        return this.prisma.car.findMany()
    }

    async getCar(id:number): Promise<Car | null> {
        return this.prisma.car.findUnique({where: {id:Number(id)}})
    }

    async createCar(data:Car): Promise<Car> {
        const existingCar = await this.prisma.car.findFirst({
            where: { licensePlate: data.licensePlate },
        });
        if (existingCar) {
            throw new ConflictException('Já existe um veículo cadastrado com esta placa!');
        }

        return this.prisma.car.create({
            data,
        })
    }

    async updateCar(id:number, data:Car): Promise<Car> {
        return this.prisma.car.update({
            where: {id:Number(id)},
            data: {
                modelName: data.modelName,
                carBrand: data.carBrand,
                licensePlate: data.licensePlate,
                carColor: data.carColor,
                carOwner: data.carOwner,
            }
        })
    }

    async deleteCar(id:number): Promise<Car> {
        return this.prisma.car.delete({
            where: {id:Number(id)},
        })
    }
}