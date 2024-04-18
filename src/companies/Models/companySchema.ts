import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Company {
  @Prop()
  tenantId: String;
  @Prop({})
  name: String;
  @Prop({ type: Boolean, default: true })
  active: Boolean;
}
export const CompanySchema = SchemaFactory.createForClass(Company);
