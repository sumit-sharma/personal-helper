import { PartialType } from '@nestjs/mapped-types';
import { CreateAssistantDto } from './create-assistant.dto';

export class UpdateAssistantDto extends PartialType(CreateAssistantDto) {
  readonly name: string;
  readonly country_code: string;
  readonly mobile_number: string;
  readonly email: string;
  readonly country: string;
  readonly zipcode: string;
}
