import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { Background } from 'src/entities/background.entity';
import BackgroundsUtils from 'src/utils/backgrounds.utils';

@Injectable()
export class BackgroundsService {
private readonly logger = new Logger(BackgroundsService.name);
constructor(
private readonly httpService: HttpService,
) { }

dnd_api_url = "https://www.dnd5eapi.co/api/backgrounds/";

async findBackgroundById(id: string): Promise<Background> {
const { data } = await firstValueFrom(
    this.httpService.get(this.dnd_api_url + id).pipe(
    catchError((error: AxiosError) => {
        this.logger.error(error.response.data);
        throw 'An error happened!';
    }),
    ),
);
return BackgroundsUtils.mapBackgroundFromApi(data);
}

async findAllBackgrounds(): Promise<Background[]> {
const { data } = await firstValueFrom(
    this.httpService.get(this.dnd_api_url).pipe(
    catchError((error: AxiosError) => {
        this.logger.error(error.response.data);
        throw 'An error happened!';
    }),
    ),
);
return data.results;
}
}
