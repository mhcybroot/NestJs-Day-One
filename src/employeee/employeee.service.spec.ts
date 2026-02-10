import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeeService } from './employeee.service';

describe('EmployeeeService', () => {
  let service: EmployeeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeeService],
    }).compile();

    service = module.get<EmployeeeService>(EmployeeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
