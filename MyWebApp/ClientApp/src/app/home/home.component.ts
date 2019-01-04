import { Component, Inject, APP_INITIALIZER } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  //contents: dataContents[];

  //constructor(private _content: ContentService) {
  //  let promise = new Promise((resolve, reject) => {
  //    this.contents = this._content.getContents();
  //    resolve();
  //  });
  //  promise.then(x => console.log(this.contents));
  //}

  //constructor(@Inject('AppContent') appContent: dataContents[]) {
  //  console.log(appContent);
  //}


  ngOnInit() {
    console.log("Hi");
  }
  
}

