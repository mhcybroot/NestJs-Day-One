import { IsInt, IsString } from "class-validator";

export class CreateStudentDto {
  @IsString()
  name: string;
  
  @IsInt()
  age: number;

}
