import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursDetailsComponent } from './cours-details/cours-details.component';
import { CoursTableauComponent } from './cours-tableau/cours-tableau.component';
import { MessageComponent } from './message/message.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuMoodleComponent } from './menu-moodle/menu-moodle.component';
import {MatInputModule,MatButtonModule, MatCheckboxModule, } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InscriptionComponent } from './inscription/inscription.component';
import { SectionComponent } from './section/section.component';
import { InMemoryDataService }  from './in-memory-data.service';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { RechercherComponent } from './rechercher/rechercher.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursDetailsComponent,
    CoursTableauComponent,
    MessageComponent,
    MenuMoodleComponent,
    AddLessonComponent,
    InscriptionComponent,
    SectionComponent,
    RechercherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    FlexLayoutModule,
    MatFileUploadModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
