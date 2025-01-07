import { Module } from '@nestjs/common';
import { CharactersService } from 'src/services/characters.service';
import { CharactersController } from 'src/controllers/characters.controller';
import { Characters } from 'src/entities/character.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CharactersController],
  imports: [TypeOrmModule.forFeature([Characters]),],
  providers: [CharactersService],
  exports: [],
})
export class CharactersModule { }