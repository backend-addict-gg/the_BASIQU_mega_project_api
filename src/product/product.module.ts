import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { tenantModels } from 'src/Providers/modelProvider';
import { TenantsMiddleware } from 'src/Middlewares/tenantMiddleware';
import { tenantConnectionProvider } from 'src/Providers/connectionProvider';

@Module({
  providers: [ProductService,  tenantModels.productModel],
  controllers: [ProductController],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantsMiddleware).forRoutes(ProductController);
  }
}
