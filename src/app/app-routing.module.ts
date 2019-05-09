import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursTableauComponent } from './cours-tableau/cours-tableau.component';
import { CoursDetailsComponent } from './cours-details/cours-details.component';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {SectionComponent} from './section/section.component';

const routes: Routes = [
  {path: 'addlesson', component: AddLessonComponent},
  {path: 'ajoutCours', component: InscriptionComponent},
  {path: 'ajoutSection', component: SectionComponent},
  {path: 'courtableau', component: CoursTableauComponent},
  {path: 'details/:code', component: CoursDetailsComponent},
  { path: '', redirectTo: '/courtableau', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
