import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, HttpStatus } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";
import { Request, Response } from "express";

@Controller('login')
export class UserController{

    constructor(private readonly userService: UserService){}
    
    @Get()
    async getAllUser(@Req() request:Request, @Res() response:Response ):Promise<any>{
        const result =  await this.userService.getAllUser()
        return response.status(200).json({
            status: "Ok!",
            message: "Successfully fetch data!",
            result: result 
        })
    }

    @Post()
    async postUser(@Body() postData: User):Promise<User>{
        return this.userService.createUser(postData)
    }

    @Get(':id')
    async getUser(@Param('id') id:number):Promise<User | null>{
        return this.userService.getUser(id)
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:number):Promise<User>{
        return this.userService.deleteUser(id)
    }

    @Put(':id')
    async updateUser(@Param('id') id: number,@Body() data: User): Promise<User> {
    return this.userService.updateUser(id,data);
    }

    @Post('validate')
    async validateLogin(@Body() postData: User, @Res() response: Response) {
        const { login, password } = postData;
        const user = await this.userService.validateLogin(login, password);

        if (user) {
            return response.status(HttpStatus.OK).json({
                status: 'OK!',
                message: 'Login correct!',
                user,
            });
        } else {
            return response.status(HttpStatus.UNAUTHORIZED).json({
                status: 'Unauthorized',
                message: 'Login or password are incorrect',
            });
        }
    }
}