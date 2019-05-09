import { Component, OnInit } from '@angular/core';
import { Cours } from '../cours';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  leCour = new Cours();
  constructor(
    public dialogRef: MatDialogRef<InscriptionComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
