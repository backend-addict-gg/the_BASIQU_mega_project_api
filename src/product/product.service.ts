import { HttpStatus, Injectable, InternalServerErrorException, Inject} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './Model/productSchema';
import { Model } from 'mongoose';
import { Response } from 'express';
import { ProductDTO } from './Validation/productDTO';

@Injectable()
export class ProductService {
  constructor(@Inject('PRODUCT_MODEL') private repository: Model<Product>) {}

  async createProducts(response: Response, body: ProductDTO) {
    try {
      const prods: Product = await this.repository.create(body);
      return response.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Successfully created product',
        product: prods,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Something went wrong. Please try again later',
      );
    }
  }
}
