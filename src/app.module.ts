import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeeModule } from './employeee/employeee.module';

@Module({
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, ProductService],
  imports: [EmployeeeModule],
})
export class AppModule {}
