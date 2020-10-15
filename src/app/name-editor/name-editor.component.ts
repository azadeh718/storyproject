import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StoryserviceService } from '../services/storyservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor(private service:StoryserviceService,private _snackBar: MatSnackBar) { }

  storyName:string;
  uploadedBy:string;
  uploadedDate:string;
  story:string

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


  saveStory()
  {
    this.service.saveStory({storyName:this.storyName,story:this.story,uploadedBy:this.uploadedBy,uploadedDate:this.uploadedDate}).subscribe(data=>{
  this.openSnackBar("Story Saved","close");
    })
  }

  ngOnInit(): void {
  }

  



  

}
