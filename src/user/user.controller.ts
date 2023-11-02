import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";
import { Request, Response } from "express";

@Controller('login')
export class UserController{

    constructor(private readonly userService: UserService){}
    
    @Get()
    async getAllBook(@Req() request:Request, @Res() response:Response ):Promise<any>{
        const result =  await this.userService.getAllUser()
        return response.status(200).json({
            status: "Ok!",
            message: "Successfully fetch data!",
            result: result 
        })
    }

    @Post()
    async postBook(@Body() postData: User):Promise<User>{
        return this.userService.createUser(postData)
    }

    @Get(':id')
    async getBook(@Param('id') id:number):Promise<User | null>{
        return this.userService.getUser(id)
    }

    @Delete(':id')
    async deleteBook(@Param('id') id:number):Promise<User>{
        return this.userService.deleteUser(id)
    }

    @Put(':id')
    async updateBook(@Param('id') id: number,@Body() data: User): Promise<User> {
    return this.userService.updateUser(id,data);
    }
}