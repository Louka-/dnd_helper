import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BackgroundsController } from 'src/controllers/backgrounds.controller';
import { BackgroundsService } from 'src/services/backgrounds.service';

@Module({
  controllers: [BackgroundsController],
  imports: [HttpModule],
  providers: [BackgroundsService],
  exports: [],
})
export class BackgroundsModule { }