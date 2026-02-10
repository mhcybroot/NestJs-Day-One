import { Module } from '@nestjs/common';
import { EmployeeeService } from './employeee.service';
import { EmployeeeController } from './employeee.controller';

@Module({
  providers: [EmployeeeService],
  controllers: [EmployeeeController],
})
export class EmployeeeModule {}
