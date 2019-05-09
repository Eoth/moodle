import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cours } from './cours';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const COURS = [
      { nom: 'Base de Donnée', code: 'M11001', coeff:2},
      { nom: 'Informatique Ubiquitaire', code: 'M11002', coeff:2},
      { nom: 'Intelligence Artificielle', code: 'M11003', coeff:2},
      { nom: "Management d'entreprise",code: 'M11004', coeff:2 },
      { nom: 'Système Embarqué',code: 'M11005', coeff: 2},
      { nom: 'Developpement Mobile',code: 'M11006', coeff: 2},
      { nom: 'Developpement web',code: 'M11007', coeff: 2} 
    ];
    return {COURS};
   }
   /*genId(lesCours: Cours[]): string {
    return lesCours.length > 0 ? Math.max(...lesCours.map(cour => cour.code)) + 1 : 11;
   }*/

}
