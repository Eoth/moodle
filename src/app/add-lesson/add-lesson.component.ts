import { Component, OnInit } from '@angular/core';
import { Cours, COURS } from '../cours';
import { Router } from '@angular/router';
import { MatDialogRef} from '@angular/material';
import { CoursService} from '../cours.service';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {
   cours : Cours[];
  constructor(private coursService: CoursService,
    private route: Router,
    public dialogRef: MatDialogRef<AddLessonComponent>) { }

  ngOnInit() {
    this.getCours();
  }
  getCours(): void{
    this.coursService.getCours()
      .subscribe(cours => this.cours = cours.slice(0));
  }
  addLesson(nom:string, code: string, coeff: number):void{
   //nom=nom.trim();
   // if (!nom) { return; }
    this.coursService.addCour({ nom, code, coeff } as Cours)
      .subscribe(cour => {
        this.cours.push(cour);
      });
  }
  
  


}
