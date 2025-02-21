import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    // Endpoint to create a student
    @Post()
    create(@Body() studentData: Partial<Student>): Promise<Student> {
        return this.studentService.create(studentData);
    }
    // Endpoint to fetch all students
    @Get()
    findAll(): Promise<Student[]> {
        return this.studentService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
    return this.studentService.findOne(id);
}
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateData: Partial<Student>) {
        return this.studentService.update(id, updateData);
    }
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.studentService.remove(id);
    }

}
