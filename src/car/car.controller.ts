import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, HttpStatus } from "@nestjs/common";
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

    @Post()
    async postCar(@Body() postData: Car):Promise<Car>{
        return this.carService.createCar(postData)
    }

    @Get(':id')
    async getCar(@Param('id') id:number):Promise<Car | null>{
        return this.carService.getCar(id)
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