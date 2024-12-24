import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { Race } from 'src/entities/race.entity';

@Injectable()
export class RacesService {
  private readonly logger = new Logger(RacesService.name);
  constructor(
    private readonly httpService: HttpService,
  ) { }

  dnd_api_url = "https://www.dnd5eapi.co/api/races/";

  async findRace(id: string): Promise<Race> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.dnd_api_url + id).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    const race = {
      ...data,
      starting_proficiency_options_desc: data.starting_proficiency_options?.desc ?? 'no proficiency options available for this race',
      starting_proficiency_options_choose: data.starting_proficiency_options?.choose ?? 0,
      starting_proficiency_options: data.starting_proficiency_options ? data.starting_proficiency_options.from.options.map(element => element.item) : [],
    };
    return race;
  }
}
