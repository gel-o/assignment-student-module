import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/entities/student.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'bgnayat',
      database: 'student_db',
      entities: [Student],
      synchronize: true,
    }),
    StudentModule
  ],
})
export class AppModule {}
