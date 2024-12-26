import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { Class } from 'src/entities/class.entity';
import ClassesUtils from 'src/utils/classes.utils';

@Injectable()
export class ClassesService {
  private readonly logger = new Logger(ClassesService.name);
  constructor(
    private readonly httpService: HttpService,
  ) { }

  dnd_api_url = "https://www.dnd5eapi.co/api/classes/";

  async findClass(id: string): Promise<Class> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.dnd_api_url + id).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return ClassesUtils.mapClassFromApi(data);
  }
}
