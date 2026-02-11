import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { NotFoundError } from 'rxjs';
import { Student } from './interface/student.interface';

@Injectable()
export class StudentService {
  private students: Student[] = [];

  create(createStudentDto: CreateStudentDto) {
    let newStudent : Student = {
      id : Date.now(),
      ...createStudentDto
    }
    this.students.push(newStudent);
    return newStudent;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) throw new NotFoundException('Student Not Found!');
    return student;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = this.findOne(id);
    Object.assign(student, updateStudentDto);
    return student;
  }

  patchStudent(id: number, age: number) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found!');
    let updateStudent : Student= {
      id:id,
      name: this.students[index].name,
      age: age
    }

    this.students[index] = updateStudent;
    return this.students[index];
  }

  patchName(id:number,name:string){
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found!');
    let updateStudent : Student= {
      id:id,
      name: name,
      age: this.students[index].age
    }
    this.students[index] = updateStudent;
    return this.students[index];
  }
  remove(id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found!');

    const deleted = this.students.splice(index, 1);
    return { message: 'Student Deletd', student: deleted[0] };
  }
}
