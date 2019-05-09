import { Component, OnInit } from '@angular/core';
import { Cours} from '../cours';
import { CoursService} from '../cours.service';


@Component({
  selector: 'app-cours-tableau',
  templateUrl: './cours-tableau.component.html',
  styleUrls: ['./cours-tableau.component.css']
})
export class CoursTableauComponent implements OnInit {

cours: Cours[]=[];

  constructor( private coursService: CoursService) { }

  ngOnInit() {
    this.getCours();
  }

  getCours(): void{
    this.coursService.getCours()
      .subscribe(cours => this.cours = cours.slice(0));
  }
  delete(cour: Cours): void {
    this.cours = this.cours.filter(h => h !== cour);
    this.coursService.deleteCour(cour).subscribe();
  }

}
