import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, HttpStatus, Query, HttpException } from "@nestjs/common";
import { Car } from "./car.model";
import { CarService } from "./car.service";
import { Request, Response } from "express";

@Controller('car')
export class CarController{

    constructor(private readonly carService: CarService){}

    @Get()
    async getAllCar(@Req() request:Request, @Res() response:Response ):Promise<any>{
        const result =  await this.carService.getAllCar()
        return response.status(200).json({
            status: "Ok!",
            message: "Successfully fetch data!",
            result: result 
        })
    }

    @Get('validate-brand')
    async validateCarBrand(@Query('carBrand') carBrand: string, @Res() response: Response): Promise<any> {
        const isValidBrand = this.carService.isValidCarBrand(carBrand);

        if (isValidBrand) {
            return response.status(HttpStatus.OK).json({
                status: "Ok!",
            });
        } else {
            return response.status(HttpStatus.BAD_REQUEST).json({
                status: "Bad Request",
                message: "Informe uma marca existente!",
            });
        }
    }

    @Post()
    async postCar(@Body() postData: Car):Promise<Car>{
        return this.carService.createCar(postData)
    }

    @Get(':id')
    async getCar(@Param('id') id:number):Promise<Car | null>{
        return this.carService.getCar(id)
    }

    @Get('by-client/:clientId')
    async getCarsByClientId(@Param('clientId') clientId: number): Promise<Car[]> {
        const cars = await this.carService.getCarsByClientId(Number(clientId));
        if (cars.length > 0) {
            throw new HttpException('O cliente possui veículos registrados em seu nome.', HttpStatus.BAD_REQUEST);
        }
        return null
    }

    @Delete(':id')
    async deleteCar(@Param('id') id:number):Promise<Car>{
        return this.carService.deleteCar(id)
    }

    @Put(':id')
    async updateCar(@Param('id') id: number,@Body() data: Car): Promise<Car> {
        return this.carService.updateCar(id,data);
    }
}