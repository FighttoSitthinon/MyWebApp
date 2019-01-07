import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContentService {

  //ประมาณว่ามันทำ Dependency Injection
  constructor(private http: HttpClient, @Inject('BASE_URL') private _baseUrl: string) { }

  getContents(): any {
    return this.http.get<dataContent[]>(this._baseUrl + 'api/Contents/Content/All');
  }

  getProfileContent(): any {
    return this.http.get<dataContent[]>(this._baseUrl + 'api/Contents/Content/ProfileContent');
  }

  getIntro(): any {
    return this.http.get<dataContent>(this._baseUrl + 'api/Contents/Content/Intro');
  }

  getWorkExp(): any {
    return this.http.get<dataWorkExp[]>(this._baseUrl + 'api/Contents/Content/WorkExp');
  }
}

interface dataContent {
  key: string;
  group: string;
  value: string;
}

interface dataWorkExp {
  no: number;
  timeline: string;
  title: string;
  description: string;
}

