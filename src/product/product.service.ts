import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'Moble', price: 2000 },
    { id: 2, name: 'Laptop', price: 40000 },
    { id: 3, name: 'PC', price: 90000 },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  addProduct(id: number, name: string, price: number) {
    this.products.push({ id, name, price });
  }
}
