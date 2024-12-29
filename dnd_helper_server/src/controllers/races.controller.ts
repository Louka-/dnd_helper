import {
  Controller, Get, Param
} from '@nestjs/common';
import { RacesService } from 'src/services/races.service';


@Controller('races')
export class RacesController {
  constructor(private raceService: RacesService) { }

  @Get('one/:id')
  getRaceById(
    @Param('id') id: string
  ) {
    return this.raceService.findRaceById(id);
  }

  @Get('all')
  getAllRaces() {
    return this.raceService.findAllRaces();
  }

}