import { Module } from '@nestjs/common';
import { ErrorController } from './error.controller';
import { ErrorService } from './error.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Error} from './error.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Error])],
  controllers: [ErrorController],
  providers: [ErrorService],
  exports: [TypeOrmModule],
})
export class ErrorModule {}