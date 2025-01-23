import {
Controller, Get, Param
} from '@nestjs/common';
import { BackgroundsService } from 'src/services/backgrounds.service';


@Controller('backgrounds')
export class BackgroundsController {
    constructor(private backgroundService: BackgroundsService) { }

    @Get('one/:id')
    getBackgroundById(
    @Param('id') id: string
    ) {
    return this.backgroundService.findBackgroundById(id);
    }

    @Get('all')
    getAllBackgrounds() {
    return this.backgroundService.findAllBackgrounds();
    }
}