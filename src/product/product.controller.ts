import { Controller,Post,Body,Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { Response } from 'express';
import { ProductDTO } from './Validation/productDTO';

@Controller('product')
export class ProductController {
    constructor(private service: ProductService) { }
    @Post()
    create(@Res() response: Response, @Body() body: ProductDTO) {
        return this.service.createProducts(response,body)
    }
    
}
