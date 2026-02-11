import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('student')
@UseFilters(HttpExceptionFilter)
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Patch(':id/:age')
  patch(@Param('id') id: string, @Param('age', ParseIntPipe) age: string) {
    return this.studentService.patchStudent(+id, +age);
  }

  @Patch(':id/name/:name')
  patchName(
    @Param('id') id: string,
    @Param('name', new UppercasePipe()) name: string,
  ) {
    return this.studentService.patchName(+id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
