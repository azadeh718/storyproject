import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryserviceService {

  constructor(private http:HttpClient) { }


saveStory(data:any)

{
return this.http.post("http://localhost:3000/saveStory",{data:data});
}
}
