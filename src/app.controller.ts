import { Controller, Get, Next, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get()
  indexhtml(@Res() res: Response): void {
    res.sendFile(join(__dirname, '../../calculatrice.html'));
  }

  @Get('calculatrice.css')
  css(@Res() res: Response): void {
    res.sendFile(join(__dirname, '../../calculatrice.css'));
  }

  @Get('calculatrice.js')
  js(@Res() res: Response): void {
    res.sendFile(join(__dirname, '../../calculatrice.js'));
  }

}
