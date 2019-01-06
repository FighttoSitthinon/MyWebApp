import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContentService {

  //ประมาณว่ามันทำ Dependency Injection
  constructor(private http: HttpClient, @Inject('BASE_URL') private _baseUrl: string) { }

  getContents(): any {
    return this.http.get<dataContents[]>(this._baseUrl + 'api/Contents/Content/All');
  }

  getProfileContent(): any {
    return this.http.get<dataContents>(this._baseUrl + 'api/Contents/Content/ProfileContent');
  }
}

interface dataContents {
  key: string;
  group: string;
  value: string;
}

