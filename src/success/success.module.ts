import { Module } from '@nestjs/common';
import { SuccessController } from './success.controller';
import { SuccessService } from './success.service';
import { Success } from './success.entity'
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Success])],
  controllers: [SuccessController],
  providers: [SuccessService],
  exports: [TypeOrmModule],
})
export class SuccessModule {}