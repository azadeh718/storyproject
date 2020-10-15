import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile = null;
  
  title = 'IT6203';
  formName = '';
  http: any;
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  
  onUpload() {
    // this.http is the injected HttpClient
    this.http.post('mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb', this.selectedFile);
      
  }
  
}
