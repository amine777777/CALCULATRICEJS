import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Success} from './success.entity'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SuccessService {
    constructor(@InjectRepository(Success) private successRepository: Repository<Success>){}

    async createSucces(timeTakenMs: number): Promise<Success> {
       console.log("Sauvegarde d'un succès dans la DB");
        const success = new Success();
        success.time=timeTakenMs;
        console.log(success);
        await success.save();
        return success;
    }

    async reponseSucces(tempsPris: number): Promise<[number,number]>{
       console.log("On traite la requête succès")
        const reponse = await this.successRepository.find();
        var moyenne=0;
        var succesRapide=0;
       reponse.forEach(succes=>{
            moyenne+=succes.time;
            if (succes.time>tempsPris){
                succesRapide+=1;
            }
        })
        console.log([moyenne/reponse.length,succesRapide*100/reponse.length]);
        return [moyenne/reponse.length,succesRapide*100/reponse.length];
    }
}