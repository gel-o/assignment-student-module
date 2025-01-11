import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) { }

    // Create a student
    async create(studentData: Partial<Student>): Promise<Student> {
        const student = this.studentRepository.create(studentData);
        return this.studentRepository.save(student);
    }
    // Fetch all students
    async findAll(): Promise<Student[]> {
        return this.studentRepository.find();
    }
    async findOne(id: number): Promise<Student> {
        const student = await this.studentRepository.findOne({ where: { id } });
        if (!student) {
        }
        return student;
    }
    async update(id: number, updateStudentDto: any): Promise<Student> {
        // Update the student entity
        await this.studentRepository.update(id, updateStudentDto);
        
        // Find and return the updated student by ID
        return this.studentRepository.findOne({ where: { id } });
    }
}
