import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContentService {
  
  contents: dataContents[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private _baseUrl: string) { }

  getContents(): any {
    this.http.get<dataContents[]>(this._baseUrl + 'api/Contents/Content/All').subscribe(result => {
      this.contents = result;
      return result;
    }, error => { console.log(error); });
  }
}

interface dataContents {
  key: string;
  group: string;
  value: string;
}