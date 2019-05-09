import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AddLessonComponent} from "../add-lesson/add-lesson.component";
import { InscriptionComponent } from '../inscription/inscription.component';

@Component({
  selector: 'app-menu-moodle',
  templateUrl: './menu-moodle.component.html',
  styleUrls: ['./menu-moodle.component.css']
})
export class MenuMoodleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddLessonComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
  openSecondDialog(): void {
    const dialogRef = this.dialog.open(InscriptionComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  ngOnInit() {
  }

}
