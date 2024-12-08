import { Injectable } from '@nestjs/common';
import { CreateAssistantDto } from './dto/create-assistant.dto';
import { UpdateAssistantDto } from './dto/update-assistant.dto';
import { Assistant } from './schemas/assistant.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AssistantService {
  constructor(
    @InjectModel(Assistant.name) private assistantModel: Model<Assistant>,
  ) {}

  async create(createAssistantDto: CreateAssistantDto): Promise<Assistant> {
    const createdCat = new this.assistantModel(createAssistantDto);
    return createdCat.save();
  }

  async findAll(): Promise<Assistant[]> {
    return this.assistantModel.find();
    // return `This action returns all assistant`;
  }

  findOne(id: string) {
    return this.assistantModel.findById(id);
  }

  update(id: string, updateAssistantDto: UpdateAssistantDto) {
    return this.assistantModel.findByIdAndUpdate(id, updateAssistantDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.assistantModel.findByIdAndDelete(id);
  }
}
