import {
  Controller, Get, Param
} from '@nestjs/common';
import { SubracesService } from 'src/services/subraces.service';


@Controller('subraces')
export class SubracesController {
  constructor(private subraceService: SubracesService) { }

  @Get('one/:id')
  getSubraceById(
    @Param('id') id: string
  ) {
    return this.subraceService.findSubraceById(id);
  }

}