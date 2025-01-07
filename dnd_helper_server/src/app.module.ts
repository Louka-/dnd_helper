import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users.module';
import * as dotenv from 'dotenv';
import { MulterModule } from '@nestjs/platform-express';
import { RacesModule } from './modules/races.module';
import { ClassesModule } from './modules/classes.module';
import { SubracesModule } from './modules/subraces.module';
import { CharactersModule } from './modules/characters.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,

    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ClassesModule,
    RacesModule,
    SubracesModule,
    UsersModule,
    CharactersModule,
    MulterModule.register({
      dest: './files',
    })
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { }
