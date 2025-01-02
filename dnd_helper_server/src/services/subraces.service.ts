import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { Subrace } from 'src/entities/subrace.entity';
import SubraceUtils from 'src/utils/subraces.utils';

@Injectable()
export class SubracesService {
  private readonly logger = new Logger(SubracesService.name);
  constructor(
    private readonly httpService: HttpService,
  ) { }

  dnd_api_url = "https://www.dnd5eapi.co/api/subraces/";

  async findSubraceById(id: string): Promise<Subrace> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.dnd_api_url + id).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return SubraceUtils.mapSubraceFromApi(data);
  }
}
