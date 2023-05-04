import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Error } from './error.entity';

@Injectable()
export class ErrorService {
    constructor(
        @InjectRepository(Error)
        private echecRepository: Repository<Error> 
    ){}

    async createError(): Promise<Error> {
        console.log("Sauvegarde d'un échec dans la DB");
        const echec = new Error();
        console.log(echec) 
        await echec.save();
        return echec;
    }

    async lastError(){
      
        console.log("Recherche du dernier échec en date dans la DB");
        const reponse = await this.echecRepository.find();
        
        console.log(reponse[reponse.length-1]);
        
        return [reponse[reponse.length-1],reponse.length]; 
    }
}