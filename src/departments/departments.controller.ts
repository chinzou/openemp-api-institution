import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Department } from './department.entity';
import { CreateDepartmentDto } from './departments.dto';
import { DepartmentsService } from './departments.service';

@Controller('departments')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) {}

    @Get()
    public getAll(): Promise<Department[]> {
        return this.departmentsService.getAllUsers();
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): Promise<Department> {
    return this.departmentsService.getUser(id);
    }
    @UseGuards(JwtAuthGuard)
    @Post()
    public createUser(@Body() Body: CreateDepartmentDto): Promise<Department> {
        return this.departmentsService.createUser(Body);
    }

}
