import { Global, Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { UuidModule } from 'nestjs-uuid';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './Models/companySchema';
import { tenantConnectionProvider } from 'src/Providers/connectionProvider';
@Global()
@Module({
  imports: [UuidModule, MongooseModule.forFeature([{name: Company.name,schema:CompanySchema}])],
  providers: [CompaniesService,tenantConnectionProvider],
  controllers: [CompaniesController],
  exports:[CompaniesService,tenantConnectionProvider]
})
export class CompaniesModule {}
