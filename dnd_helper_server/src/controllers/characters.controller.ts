import {
  Body,
  Controller, Get, Param,
  Post
} from '@nestjs/common';
import { CharacterCreationModel } from 'src/dtos/character-creation.model';
import { CharactersService } from 'src/services/characters.service';


@Controller('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) { }

  @Get('allByUserId/:id')
  getAllCharactersByUserId(
    @Param('id') id: number
  ) {
    return this.charactersService.findAllByUserId(id);
  }

  @Get('one/:id')
  getCharacterById(
    @Param('id') id: number
  ) {
    return this.charactersService.findCharacterById(id);
  }

  @Post('create')
  create(
    @Body() characterData: CharacterCreationModel,
  ) {
    return this.charactersService.createCharacter(characterData);
  }

  @Post('delete/:id')
  delete(
    @Param('id') id: number
  ) {
    return this.charactersService.removeOneById(id);
  }

}