import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StoryserviceService } from '../services/storyservice.service';


@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor(private service:StoryserviceService) { }

  storyName:string;
  uploadedBy:string;
  uploadedDate:string;
  story:string



  saveStory()
  {
    this.service.saveStory({storyName:this.storyName,story:this.story,uploadedBy:this.uploadedBy,uploadedDate:this.uploadedDate}).subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

  



  

}
