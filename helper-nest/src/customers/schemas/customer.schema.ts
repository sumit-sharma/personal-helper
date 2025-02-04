import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  name: string;

  @Prop()
  country_code: string;

  @Prop()
  mobile_number: number;

  @Prop()
  email: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
