import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './Models/companySchema';
import mongoose, { Model, Mongoose } from 'mongoose';
import { Response } from 'express';
import { InjectUuidService, UuidService } from 'nestjs-uuid';
import { CreateCompanyDTO } from './DTOs/companyDTO';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private repository: Model<Company>,
    @InjectUuidService() private readonly uuidService: UuidService,
  ) {}

  async createTenant(response: Response, body: CreateCompanyDTO) {
    try {
      const data: Company = await this.repository.create({
        tenantId: Date.now()+'randomId',
        ...body,
      });
         const mongoose = new Mongoose();
         const db = mongoose.createConnection(
           `${process.env.DB_CONN}${data.tenantId}?retryWrites=true&w=majority`,
         );
         await db.createCollection(data.tenantId.toString());
        
      return response
        .status(HttpStatus.CREATED)
        .json({ success: true, message: 'Created tenant.', company: data });
    } catch (error) {
        console.log(error)
      throw new InternalServerErrorException(
        'Something went wrong. Please try again.',
      );
    }
  }
  async getTenantById(id: string) {
    return await this.repository.findOne({ tenantId: id });
  }
}
