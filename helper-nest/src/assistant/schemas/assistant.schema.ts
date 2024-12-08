import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AssistantDocument = HydratedDocument<Assistant>;

@Schema()
export class Assistant {
  @Prop()
  name: string;

  @Prop({ required: true })
  country_code: string;

  @Prop()
  mobile_number: number;

  @Prop()
  email: string;

  @Prop()
  country: string;

  @Prop()
  zipcode: string;

  @Prop()
  state: string;

  @Prop()
  city: string;

  @Prop()
  location: string;
}

export const AssistantSchema = SchemaFactory.createForClass(Assistant);
