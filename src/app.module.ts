import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuccessModule } from './success/success.module';
import { ErrorModule } from './error/error.module';
import { typeOrmConfig } from './config/typeorm.config';
import {Success} from './success/success.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), SuccessModule, ErrorModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {} 