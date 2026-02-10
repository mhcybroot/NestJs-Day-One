import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class StudentService {
  private students: CreateStudentDto[] = [
    new CreateStudentDto(1, 'mahmudul hasan', 25),
    new CreateStudentDto(2, 'kamrun hasan', 21),
    new CreateStudentDto(3, 'naim hasan', 55),
  ];

  create(createStudentDto: CreateStudentDto) {
    this.students.push(createStudentDto);
    return createStudentDto;
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
    let updateStudent = new CreateStudentDto(
      id,
      this.students[index].name,
      age,
    );

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
