import {
  Controller, Get, Param
} from '@nestjs/common';
import { ClassesService } from 'src/services/classes.service';


@Controller('classes')
export class ClassesController {
  constructor(private classService: ClassesService) { }

  @Get('one/:id')
  getClassById(
    @Param('id') id: string
  ) {
    return this.classService.findClassById(id);
  }


  @Get('all')
  getAllClasses() {
    return this.classService.findAllClasses();
  }

}