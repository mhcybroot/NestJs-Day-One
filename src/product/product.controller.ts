import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  getAllProduct() {
    return this.service.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.service.getProductById(Number(id));
  }
}
