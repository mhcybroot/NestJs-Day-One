import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
@ApiBearerAuth('JWT-auth')
@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAllProduct() {
    return this.service.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.service.getProductById(Number(id));
  }
}
