import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { StoryserviceService } from './services/storyservice.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ShowstoryComponent } from './showstory/showstory.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '' , component: NameEditorComponent},
  {path: 'showstory' , component: ShowstoryComponent},
  
  

];
@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ShowstoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule ,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StoryserviceService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
