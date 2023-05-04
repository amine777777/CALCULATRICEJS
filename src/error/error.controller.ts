import { Controller,Post,Body } from '@nestjs/common';
import {Error} from './error.model';
import { ErrorService } from './error.service';

@Controller('Error')
export class ErrorController {
  constructor(private errorService: ErrorService) {}

  @Post() 
  HandleEchec():Promise<(number|Error)[]>{
        console.log("POST error réçu.");
       
        this.errorService.createError();
       
        return this.errorService.lastError();
      }
}
