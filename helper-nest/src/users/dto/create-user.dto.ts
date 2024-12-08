import { IsEmail, IsInt } from 'class-validator';

export class CreateUserDto {
  readonly name: string;

  readonly username: string;

  readonly country_code: string;

  @IsInt()
  readonly mobile_number: number;

  @IsEmail()
  readonly email: string;

  readonly country: string;

  readonly zipcode: string;

  readonly state: string;

  readonly city: string;

  readonly location: string;

  readonly role: string;
}
