import { Controller,Post,Body } from '@nestjs/common';
import { SuccessService } from './success.service';
import { Success } from './success.entity';

@Controller('Success')
export class SuccessController {
    constructor(private succesService:SuccessService ){}

    @Post()
    handleSucces(@Body('time') time: number):Promise<[number,number]>{
        console.log("POST reçu pour un succès !");

        this.succesService.createSucces(time);
        console.log("Succès sauvegardé");
        
        return this.succesService.reponseSucces(time);
    }
}