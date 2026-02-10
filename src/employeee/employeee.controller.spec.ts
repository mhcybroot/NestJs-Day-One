import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeeController } from './employeee.controller';

describe('EmployeeeController', () => {
  let controller: EmployeeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeeController],
    }).compile();

    controller = module.get<EmployeeeController>(EmployeeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
