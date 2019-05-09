import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MatDialog} from '@angular/material';
import {SectionComponent} from '../section/section.component';

import {Section,SECTION} from '../section';
import { Cours, COURS} from '../cours';
import {CoursService } from '../cours.service';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit {

  cour:Cours;
  sections: Section[]=[];
  constructor(
    private route: ActivatedRoute,
    private coursService: CoursService,
    private location: Location,
    public dialog: MatDialog
  ) { }
  getSection(): void{
    this.coursService.getSection()
      .subscribe(sections => this.sections = sections.slice(0));
  }
  ngOnInit(): void{
    this.getCours();
    this.getSection();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SectionComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getCours(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.coursService.getCour(code)
      .subscribe(cour => this.cour = cour);
  }
 
  goBack(): void {
    this.location.back();
  }

}
