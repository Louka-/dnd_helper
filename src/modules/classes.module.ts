import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ClassesController } from 'src/controllers/classes.controller';
import { ClassesService } from 'src/services/classes.service';

@Module({
  controllers: [ClassesController],
  imports: [HttpModule],
  providers: [ClassesService],
  exports: [],
})
export class ClassesModule { }