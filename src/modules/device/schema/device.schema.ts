import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeviceDocument = HydratedDocument<Device>;

@Schema({ timestamps: true })
export class Device {
  @Prop()
  key: string;
  @Prop()
  lastSeen: Date;
  @Prop()
  active: boolean;
  @Prop()
  plan: string;
  @Prop()
  createdAt: Date;
  @Prop()
  updatedAt: Date;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
