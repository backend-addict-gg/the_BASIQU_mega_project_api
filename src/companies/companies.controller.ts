import { Controller ,Post,Res, Body} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDTO } from './DTOs/companyDTO';
import { Response } from 'express';

@Controller('companies')
export class CompaniesController {
    constructor(private service: CompaniesService) { }
    @Post()
    createTenant(@Res()response:Response,@Body() body: CreateCompanyDTO) {
        return this.service.createTenant(response,body)
    }
}
