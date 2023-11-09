import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, HttpStatus } from "@nestjs/common";
import { Client } from "./client.model";
import { ClientService } from "./client.service";
import { Request, Response } from "express";

@Controller('client')
export class ClientController{

    constructor(private readonly clientService: ClientService){}
    
    @Get()
    async getAllClient(@Req() request:Request, @Res() response:Response ):Promise<any>{
        const result =  await this.clientService.getAllClient()
        return response.status(200).json({
            status: "Ok!",
            message: "Successfully fetch data!",
            result: result 
        })
    }

    @Post()
    async postUser(@Body() postData: Client):Promise<Client>{
        return this.clientService.createClient(postData)
    }

    @Get(':id')
    async getClient(@Param('id') id:number):Promise<Client | null>{
        return this.clientService.getClient(id)
    }

    @Delete(':id')
    async deleteClient(@Param('id') id:number):Promise<Client>{
        return this.clientService.deleteClient(id)
    }

    @Put(':id')
    async updateClient(@Param('id') id: number,@Body() data: Client): Promise<Client> {
    return this.clientService.updateClient(id,data);
    }
}