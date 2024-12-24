import {
  Controller, Get, Param
} from '@nestjs/common';
import { RacesService } from 'src/services/races.service';


@Controller('races')
export class RacesController {
  constructor(private raceService: RacesService) { }

  @Get('one/:id')
  getRace(
    @Param('id') id: string
  ) {
    return this.raceService.findRace(id);
  }

}