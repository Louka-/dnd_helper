import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RacesService } from 'src/services/races.service';
import { RacesController } from 'src/controllers/races.controller';

@Module({
  controllers: [RacesController],
  imports: [HttpModule],
  providers: [RacesService],
  exports: [],
})
export class RacesModule { }