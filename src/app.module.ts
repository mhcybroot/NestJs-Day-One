import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeeModule } from './employeee/employeee.module';
import { StudentModule } from './student/student.module';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AppController, UserController, ProductController, DatabaseController],
  providers: [AppService, ProductService, DatabaseService],
  imports: [EmployeeeModule, StudentModule,ConfigModule.forRoot({isGlobal: true})],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
