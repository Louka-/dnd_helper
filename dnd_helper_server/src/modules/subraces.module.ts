import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SubracesService } from 'src/services/subraces.service';
import { SubracesController } from 'src/controllers/subraces.controller';

@Module({
  controllers: [SubracesController],
  imports: [HttpModule],
  providers: [SubracesService],
  exports: [],
})
export class SubracesModule { }