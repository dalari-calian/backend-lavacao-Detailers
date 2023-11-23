import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, HttpStatus, Query } from "@nestjs/common";
import { Service } from "./service.model";
import { ServiceService } from "./service.service";
import { Request, Response } from "express";

@Controller('service')
export class ServiceController{

    constructor(private readonly serviceService: ServiceService){}

    @Get()
    async getAllService(@Req() request:Request, @Res() response:Response ):Promise<any>{
        const result =  await this.serviceService.getAllService()
        return response.status(200).json({
            status: "Ok!",
            message: "Successfully fetch data!",
            result: result 
        })
    }

    @Post()
    async postService(@Body() postData: Service):Promise<Service>{
        return this.serviceService.createService(postData)
    }

    @Get(':id')
    async getService(@Param('id') id:number):Promise<Service | null>{
        return this.serviceService.getService(id)
    }

    @Delete(':id')
    async deleteService(@Param('id') id:number):Promise<Service>{
        return this.serviceService.deleteService(id)
    }

    @Put(':id')
    async updateService(@Param('id') id: number,@Body() data: Service): Promise<Service> {
        return this.serviceService.updateService(id,data);
    }
}