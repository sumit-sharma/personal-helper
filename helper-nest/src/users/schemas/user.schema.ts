import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  user_id: string;

  @Prop()
  name: string;

  @Prop({ required: true, index: true, max: 400 })
  username: string;

  @Prop({ required: true, index: true, max: 400 })
  password: string;

  @Prop({ required: true, default: '+1' })
  country_code: string;

  @Prop({ required: true })
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

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
