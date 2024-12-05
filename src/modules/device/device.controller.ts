import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { DeviceService } from './device.service';
import { PingDto } from './dto/ping.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Device')
@Controller('device')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Post('ping')
  @HttpCode(200)
  async ping(@Body() { key }: PingDto) {
    await this.deviceService.ping(key);
  }
}
