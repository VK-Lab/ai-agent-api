import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { DeviceDocument } from './schema/device.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel('Device') private deviceModel: Model<DeviceDocument>,
  ) {}

  async ping(key: string) {
    const device = await this.deviceModel.findOne({ key }).exec();
    if (!device) {
      throw new NotFoundException('Key not found');
    }
    if (!device.active) {
      device.active = true;
    }
    device.lastSeen = new Date();
    return device.save();
  }
}
