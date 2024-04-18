import {
  Injectable,
  NestMiddleware,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CompaniesService } from 'src/companies/companies.service';

@Injectable()
export class TenantsMiddleware implements NestMiddleware {
  constructor(private tenantsService: CompaniesService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const tenantId = req.headers['x-tenant-id']?.toString();
    if (!tenantId) {
      throw new BadRequestException('X-TENANT-ID not provided');
    }

    const tenantExits = this.tenantsService.getTenantById(tenantId);
    if (!tenantExits) {
      throw new NotFoundException('Tenant does not exist');
    }
    req['tenantId'] = tenantId;
    next();
  }
}
