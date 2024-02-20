import { PrismaService } from "src/prisma.service";
import { Car } from "./car.model";
import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";

@Injectable()
export class CarService {
    constructor(private prisma: PrismaService){}

    async getAllCar(): Promise<Car[]> {
        return this.prisma.car.findMany()
    }

    async getCar(id:number): Promise<Car | null> {
        const car = await this.prisma.car.findUnique({
            where: { id: Number(id) },
        });
        
        if (!car) {
            throw new NotFoundException('Veículo não encontrado');
        }
        return car;
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
                idCarOwner: data.idCarOwner,
            }
        })
    }

    async deleteCar(id:number): Promise<Car> {
        return this.prisma.car.delete({
            where: {id:Number(id)},
        })
    }

    isValidCarBrand(brand: string): boolean {
        const brands = [
          "aston martin",
          "audi",
          "bentley",
          "bmw",
          "bmw motorrad",
          "byd",
          "caoa chery",
          "chevrolet",
          "chrysler",
          "citroën",
          "citroen",
          "dodge",
          "ferrari",
          "fiat",
          "ford",
          "great wall",
          "gwm",
          "honda",
          "husqvarna",
          "hyundai",
          "jac",
          "jaguar",
          "jeep",
          "kia",
          "lamborghini",
          "land rover",
          "lexus",
          "lifan",
          "maserati",
          "mclaren",
          "mercedes-benz",
          "mercedes benz",
          "mini",
          "mitsubishi",
          "nissan",
          "peugeot",
          "porsche",
          "ram",
          "renault",
          "rolls royce",
          "royal enfield",
          "seres",
          "smart",
          "subaru",
          "suzuki",
          "toyota",
          "triumph",
          "troller",
          "volkswagen",
          "volvo",
          "yamaha",
        ];
    
        return brands.includes(brand);
      }
}