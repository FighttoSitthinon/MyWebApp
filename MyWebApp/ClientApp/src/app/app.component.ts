import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public contents: dataContents[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<dataContents[]>(baseUrl + 'api/Contents/Content/All').subscribe(result => {
      this.contents = result;
      console.log(this.contents);
    }, error => console.error(error));
  }

}


interface dataContents {
  key: string;
  value: string;
}
